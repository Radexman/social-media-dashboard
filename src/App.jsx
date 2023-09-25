import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import StatsTotal from "./components/StatsTotal";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

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
      <StatsTotal />
    </div>
  );
}

export default App;
