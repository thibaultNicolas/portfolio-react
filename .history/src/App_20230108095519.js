import Navbar from "./scenes/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
