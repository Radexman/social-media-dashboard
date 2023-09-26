import PropTypes from "prop-types";
import SingleToday from "./SingleToday";

const StatsToday = ({ todayStats }) => {
  return (
    <div className="container mx-auto pb-20">
      <h2 className="mb-6 pl-5 text-2xl font-bold text-neutral-darkTheme-desaturatedBlue dark:text-neutral-lightTheme-veryPaleBlue md:pl-0">
        Overview - Today
      </h2>
      <div className="stats-wrapper">
        {todayStats.map((stat) => {
          const { id } = stat;
          return <SingleToday key={id} stat={stat} />;
        })}
      </div>
    </div>
  );
};

StatsToday.propTypes = {
  todayStats: PropTypes.array.isRequired,
};

export default StatsToday;
