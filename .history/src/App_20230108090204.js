import { useState } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery(>(min-w))
  return (
    <div className="App">

    </div>
  );
}

export default App;
