import PropTypes from "prop-types";
import utils from "../utils/helpers";
import iconDown from "../assets/images/icon-down.svg";
import iconUp from "../assets/images/icon-up.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";

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
          <img
            src={utils.chooseImage(
              media,
              facebookIcon,
              instagramIcon,
              twitterIcon,
              youtubeIcon,
            )}
            alt={`${media} icon`}
          />
          <p className="user-name">{user}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="followers-count">{utils.addK(followers)}</p>
          <p className="followers-name">Followers</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={surplus ? iconUp : iconDown}
            className="w-3"
            alt={surplus ? "Arrow Up" : "Arrow Down"}
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
