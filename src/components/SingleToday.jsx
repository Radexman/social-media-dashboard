const SingleToday = () => {
  return (
    <div className="single-today-stat-container">
      <div className="flex flex-col items-start gap-10">
        <p className="font-bold text-neutral-lightTheme-darkGrayishBlue dark:text-neutral-darkTheme-desaturatedBlue">
          Page Views
        </p>
        <p className="text-4xl font-bold text-neutral-lightTheme-veryDarkBlue dark:text-neutral-darkTheme-white">
          87
        </p>
      </div>
      <div className="flex flex-col items-center gap-10">
        <img src="src\images\icon-facebook.svg" className="w-5" alt="" />
        <div className="mt-3 flex items-center gap-1">
          <img src="src\images\icon-up.svg" className="w-3" alt="" />
          <p className="text-primary-limeGreen">3%</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToday;
