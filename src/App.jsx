import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
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
        {/* <Contact />  TODO: Implement some tool to send mails.*/}
      </main>
    </QueryClientProvider>
  );
};
export default App;
