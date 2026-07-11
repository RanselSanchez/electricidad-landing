import Navbar from "../components/layout/Navbar";
import Benefits from "../components/sections/Benefits";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Benefits />
      <Contact />
    </main>
  );
}

export default Home;
