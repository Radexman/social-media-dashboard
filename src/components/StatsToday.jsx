import PropTypes from "prop-types";
import SingleToday from "./SingleToday";

const StatsToday = ({ todayStats }) => {
  return (
    <div className="container mx-auto pb-8">
      <h2 className="mb-6 text-2xl font-bold text-neutral-darkTheme-desaturatedBlue dark:text-neutral-lightTheme-veryPaleBlue">
        Overview - Today
      </h2>
      <div className="stats-wrapper">
        {todayStats.map((stat) => {
          const { id } = todayStats;
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
