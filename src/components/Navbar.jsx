import PropTypes from "prop-types";

const Navbar = ({ handleThemeSwitch }) => {
  return (
    <nav>
      <div className="container mx-auto flex flex-col justify-between md:flex-row">
        <div className="flex flex-col items-start">
          <h1>Social Media Dashboard</h1>
          <p className="total-followers">Total Followers: 23,004</p>
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

Navbar.propTypes = {
  handleThemeSwitch: PropTypes.func.isRequired,
};

export default Navbar;
