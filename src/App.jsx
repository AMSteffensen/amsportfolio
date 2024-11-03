import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Projects />
      </main>
    </QueryClientProvider>
  );
};
export default App;
