import utils from "../utils/helpers";

const SingleStat = ({ stat }) => {
  const { media, user, followers, newFollowers, surplus } = stat;

  return (
    <div className="dark:bg-neutral-darkTheme-darkDesaturatedBlue bg-neutral-lightTheme-lightGrayishBlue h-56 rounded-lg">
      <div
        style={{
          background: utils.getBackgroundColor(media),
        }}
        className={`bg-primary-${media} h-2 rounded-t-xl`}
      ></div>
      <div className="flex flex-col items-center space-y-5 p-4">
        <div className="flex gap-2">
          <img src={`src/images/icon-${media}.svg`} alt="facebook" />
          <p className="text-neutral-darkTheme-darkDesaturatedBlue dark:text-neutral-lightTheme-lightGrayishBlue text-sm">
            {user}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-neutral-lightTheme-veryDarkBlue dark:text-neutral-lightTheme-lightGrayishBlue text-6xl font-bold">
            {utils.addK(followers)}
          </p>
          <p className="text-neutral-lightTheme-darkGrayishBlue dark:text-neutral-darkTheme-desaturatedBlue text-lg uppercase tracking-widest">
            Followers
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={
              surplus ? "src/images/icon-up.svg" : "src/images/icon-down.svg"
            }
            className="w-3"
            alt=""
          />
          <p
            className="text-sm font-bold"
            style={{
              color: surplus ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)",
            }}
          >
            {newFollowers} Today
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleStat;
