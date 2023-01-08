import { useState } from "react";
import { useMediaQuery } from "./";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery
  return (
    <div className="App">

    </div>
  );
}

export default App;
