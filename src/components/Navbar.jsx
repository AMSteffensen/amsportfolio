//import { links } from "../data";
import useFetchContent from "../fetchContent";

const Navbar = () => {
  const { data, isLoading, isError, error } = useFetchContent();

  // Extract and sort the links, ensuring 'Home' is always first
  let links = data?.navigationLinks || [];
  links = links.sort((a, b) => {
    if (a.text.toLowerCase() === "home") return -1;
    if (b.text.toLowerCase() === "home") return 1;
    return 0;
  });

  return (
    <nav className="bg-red-100">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-red-600 text-3xl font-bold">
          AM<span className="text-black">Steffensen</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide text-black hover:underline hover:text-red-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
