import { useState, useEffect } from "react";
import utils from "./utils/helpers";
import Navbar from "./components/Navbar";
import StatsTotal from "./components/StatsTotal";
import StatsToday from "./components/StatsToday";
import statsTotalData from "./data/stats-total";
import statsTodayData from "./data/stats-today";

function App() {
  const [mainStats, setMainStats] = useState([]);
  const [todayStats, setTodayStats] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    setMainStats(statsTotalData);
    setTodayStats(statsTodayData);
  }, [mainStats, todayStats]);

  useEffect(() => {
    utils.checktheme(theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-neutral-lightTheme-white dark:bg-neutral-darkTheme-veryDarkBlueBg">
      <Navbar handleThemeSwitch={handleThemeSwitch} mainStats={mainStats} />
      <StatsTotal mainStats={mainStats} />
      <StatsToday todayStats={todayStats} />
    </div>
  );
}

export default App;
