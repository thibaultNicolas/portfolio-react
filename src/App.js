import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import Expertise from "./scenes/Expertise";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Projets from "./components/portfolio/Portfolio";


function App() {
  const [selectedPage, setSelectedPage] = useState("accueil");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="md:w-5/6 mx-auto  md:h-2/3 flex">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="bg-light-grey p-10  md:h-2/3 md:flex md:justify-between md:items-center">
        <div className="md:w-5/6 mx-auto container">
          <About />
        </div>
      </div>
      <div className="md:w-5/6 mx-auto container  md:h-2/3 md:flex md:justify-between md:items-center">
        <Expertise />
      </div>
      <div className="bg-light-grey p-5  md:h-2/3 md:flex md:justify-between md:items-center">
        <div className="md:w-5/6 mx-auto container">
          <Projets />
        </div>
      </div>
      <div className="md:w-5/6 mx-auto mb-20  md:h-2/3 md:flex md:justify-between md:items-center">
        <Contact />
      </div>
      <Footer />
    </div>

  );

}

export default App;
