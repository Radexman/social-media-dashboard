import { useState, useEffect } from "react";
// import { checkTheme } from "./utils/helpers";
import Navbar from "./components/Navbar";

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
    </div>
  );
}

export default App;
