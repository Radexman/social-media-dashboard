import { useState, useEffect } from "react";
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
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-neutral-lightTheme-white dark:bg-neutral-darkTheme-veryDarkBlueBg min-h-screen">
      <Navbar handleThemeSwitch={handleThemeSwitch} />
      <StatsTotal mainStats={mainStats} />
    </div>
  );
}

export default App;
