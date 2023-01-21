import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Expertise from "./scenes/Expertise";
/* import Projets from "./scenes/Projets"; */
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
      <div className="md:w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="md:w-5/6 mx-auto">
        <Expertise />
      </div>
      {/* <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div> */}
      <LineGradient />
      <div className="bg-light-grey p-5">
        <div className="md:w-5/6 mx-auto">
          <Projets />
        </div>
      </div>

      <LineGradient />
      <div className="md:w-5/6 mx-auto mb-20">
        <Contact />
      </div>
      <Footer />
    </div>

  );

}

export default App;
