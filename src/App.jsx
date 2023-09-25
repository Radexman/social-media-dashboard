import { useState, useEffect } from "react";
import { checkTheme } from "./utils/helpers";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="bg-neutral-lightTheme-white dark:bg-neutral-darkTheme-veryDarkBlueBg min-h-screen">
      <Navbar handleThemeSwitch={handleThemeSwitch} />
    </div>
  );
}

export default App;
