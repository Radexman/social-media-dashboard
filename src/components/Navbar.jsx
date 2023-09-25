const Navbar = ({ handleThemeSwitch }) => {
  return (
    <nav className="dark:bg-neutral-darkTheme-veryDarkBlueBgTop bg-neutral-lightTheme-lightGrayishBlue flex h-52 items-start justify-center p-6 md:p-0 md:pt-10">
      <div className="container mx-auto flex flex-col justify-between md:flex-row">
        <div className="flex flex-col items-start">
          <h1 className="text-neutral-lightTheme-veryDarkBlue dark:text-neutral-darkTheme-white text-2xl font-bold">
            Social Media Dashboard
          </h1>
          <p className="text-neutral-lightTheme-darkGrayishBlue dark:text-neutral-darkTheme-desaturatedBlue text-sm font-bold">
            Total Followers: 23,004
          </p>
        </div>
        <div className="line"></div>
        <div className="dark:text-neutral-darkTheme-desaturatedBlue text-neutral-lightTheme-darkGrayishBlue mt-5 flex justify-between gap-2">
          <p className="font-bold">Dark Mode</p>
          <input
            type="checkbox"
            className="toggle bg-neutral-lightTheme-darkGrayishBlue"
            onClick={handleThemeSwitch}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
