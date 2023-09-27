import { useContext } from "react";
import utils from "../utils/helpers";
import { StatsContext } from "../context/StatsProvider";

const Navbar = () => {
  const { handleThemeSwitch, mainStats } = useContext(StatsContext);

  return (
    <nav>
      <div className="navbar-inner-wrapper">
        <div className="flex flex-col items-start">
          <h1>Social Media Dashboard</h1>
          <p className="total-followers">
            Total Followers: {utils.calculateFollowers(mainStats)}
          </p>
        </div>
        <div className="line"></div>
        <div className="darkmode-wrapper">
          <p className="font-bold">Dark Mode</p>
          <label className="switch">
            <input type="checkbox" onChange={handleThemeSwitch} />
            <span className="slider round before:dark:bg-neutral-darkTheme-darkDesaturatedBlue"></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
