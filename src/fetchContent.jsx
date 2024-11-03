import { useQuery } from "@tanstack/react-query";
import db from "../db";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "/.netlify/functions/fetchContent"
    : "http://localhost:8889/.netlify/functions/fetchContent";

const fetchContent = async () => {
  // Fetch from the API and update Dexie and React Query cache
  const fetchFromAPI = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch content");
    }

    const data = await response.json();
    await db.content.put({ key: "fetchedContent", value: data });
    return data;
  };

  // First, return cached data immediately if available
  const cachedData = await db.content.get("fetchedContent");

  // If cached data exists, start a background fetch
  if (cachedData) {
    // Trigger a background fetch to update the cache
    fetchFromAPI();
    // Return cached data immediately
    return cachedData.value;
  }

  // No cached data, fetch from the API
  return fetchFromAPI();
};

export const useFetchContent = () => {
  return useQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
    refetchOnWindowFocus: true, // Refetch when window is focused
    refetchOnReconnect: true, // Refetch on network reconnect
    refetchInterval: 1000 * 60, // Optional: Refetch every minute in the background
    staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
    cacheTime: 1000 * 60 * 30, // Data is cached for 30 minutes
  });
};

export default useFetchContent;
