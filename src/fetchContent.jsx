import { useQuery } from "@tanstack/react-query";
import db from "../db";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "/.netlify/functions/fetchContent"
    : "http://localhost:8889/.netlify/functions/fetchContent";

const fetchContent = async () => {
  // Try to fetch data from IndexedDB first
  const cachedData = await db.content.get("fetchedContent");
  if (cachedData) {
    return cachedData.value;
  }

  // Fetch from API if no cached data
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch content");
  }

  const data = await response.json();

  // Store fetched data in IndexedDB
  await db.content.put({ key: "fetchedContent", value: data });

  return data;
};

export const useFetchContent = () => {
  return useQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
    refetchOnWindowFocus: false, // Optional: Prevent refetch on window focus
    refetchOnReconnect: false, // Optional: Prevent refetch on network reconnect
    staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
    cacheTime: 1000 * 60 * 30, // Data is cached for 30 minutes
    retry: 1, // Retry once on failure
    retry: 1,
  });
};

export default useFetchContent;
