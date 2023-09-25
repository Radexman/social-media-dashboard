import { useState, useEffect } from "react";
import utils from "./utils/helpers";
import Navbar from "./components/Navbar";
import StatsTotal from "./components/StatsTotal";
import statsTotalData from "./data/stats-total";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [mainStats, setMainStats] = useState([]);

  useEffect(() => {
    setMainStats(statsTotalData);
  }, [mainStats]);

  useEffect(() => {
    utils.checktheme(theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-neutral-lightTheme-white dark:bg-neutral-darkTheme-veryDarkBlueBg min-h-screen">
      <Navbar handleThemeSwitch={handleThemeSwitch} mainStats={mainStats} />
      <StatsTotal mainStats={mainStats} />
    </div>
  );
}

export default App;
