import PropTypes from "prop-types";
import utils from "../utils/helpers";
import iconDown from "../assets/images/icon-down.svg";
import iconUp from "../assets/images/icon-up.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";

const SingleToday = ({ stat }) => {
  const { media, activityType, followers, ratio, surplus } = stat;

  return (
    <div className="single-today-stat-container">
      <div className="flex flex-col items-start gap-10">
        <p className="font-bold text-neutral-lightTheme-darkGrayishBlue dark:text-neutral-darkTheme-desaturatedBlue">
          {activityType}
        </p>
        <p className="text-4xl font-bold text-neutral-lightTheme-veryDarkBlue dark:text-neutral-darkTheme-white">
          {utils.addK(followers)}
        </p>
      </div>
      <div className="flex flex-col items-center gap-10">
        <img
          src={utils.chooseImage(
            media,
            facebookIcon,
            instagramIcon,
            twitterIcon,
            youtubeIcon,
          )}
          className="w-5"
          alt={`${media} icon`}
        />
        <div className="mt-3 flex items-center gap-1">
          <img
            src={surplus ? iconUp : iconDown}
            className="w-3"
            alt={surplus ? "Arrow Up" : "Arrow Down"}
          />
          <p
            style={{
              color: surplus ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)",
            }}
          >
            {ratio}
          </p>
        </div>
      </div>
    </div>
  );
};

SingleToday.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.number,
    media: PropTypes.string,
    activityType: PropTypes.string,
    followers: PropTypes.number,
    ratio: PropTypes.string,
    surplus: PropTypes.bool,
  }).isRequired,
};

export default SingleToday;
