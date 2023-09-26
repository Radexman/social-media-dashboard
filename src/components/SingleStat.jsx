import PropTypes from "prop-types";
import utils from "../utils/helpers";

const SingleStat = ({ stat }) => {
  const { media, user, followers, newFollowers, surplus } = stat;

  return (
    <div className="single-main-stat-container">
      <div
        style={{
          background: utils.getBackgroundColor(media),
        }}
        className={`bg-primary-${media} h-2 rounded-t-xl`}
      ></div>
      <div className="flex flex-col items-center space-y-5 p-4">
        <div className="flex gap-2">
          <img src={`src/images/icon-${media}.svg`} alt="facebook" />
          <p className="user-name">{user}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="followers-count">{utils.addK(followers)}</p>
          <p className="followers-name">Followers</p>
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

SingleStat.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.number,
    media: PropTypes.string,
    user: PropTypes.string,
    followers: PropTypes.number,
    newFollowers: PropTypes.number,
    surplus: PropTypes.bool,
  }).isRequired,
};

export default SingleStat;
