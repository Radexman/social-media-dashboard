import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import utils from "../utils/helpers";
import statsTotalData from "../data/stats-total";
import statsTodayData from "../data/stats-today";

export const StatsContext = createContext();

const StatsProvider = ({ children }) => {
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
    <StatsContext.Provider
      value={{
        mainStats,
        todayStats,
        theme,
        handleThemeSwitch,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

StatsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StatsProvider;
