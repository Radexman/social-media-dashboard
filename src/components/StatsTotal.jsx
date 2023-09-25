const StatsTotal = () => {
  return (
    <div className="relative -top-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 px-10 md:grid-cols-2 md:px-0 lg:grid-cols-4">
          <div className="dark:bg-neutral-darkTheme-darkDesaturatedBlue bg-neutral-lightTheme-lightGrayishBlue h-56 rounded-lg">
            <div className="bg-primary-facebook h-2 rounded-t-xl"></div>
            <div className="flex flex-col items-center space-y-5 p-4">
              <div className="flex gap-2">
                <img src="src\images\icon-facebook.svg" alt="facebook" />
                <p className="text-neutral-darkTheme-darkDesaturatedBlue dark:text-neutral-lightTheme-lightGrayishBlue text-sm">
                  @nathanf
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-lightTheme-veryDarkBlue text-6xl font-bold">
                  1987
                </p>
                <p className="text-neutral-lightTheme-darkGrayishBlue text-xl uppercase tracking-widest">
                  Followers
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src="src\images\icon-up.svg" className="w-3" alt="" />
                <p className="text-primary-darkTheme-toggle-end text-sm font-bold">
                  12 Today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsTotal;
1;
