import { useState, useEffect } from "react";
import utils from "./utils/helpers";
import Navbar from "./components/Navbar";
import StatsTotal from "./components/StatsTotal";
import StatsToday from "./components/StatsToday";
import statsTotalData from "./data/stats-total";
import statsTodayData from "./data/stats-today";
import StatsProvider from "./context/StatsProvider";

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

  return (
    <StatsProvider>
      <div className="min-h-screen bg-neutral-lightTheme-white dark:bg-neutral-darkTheme-veryDarkBlueBg">
        <Navbar />
        <StatsTotal />
        <StatsToday todayStats={todayStats} />
      </div>
    </StatsProvider>
  );
}

export default App;
