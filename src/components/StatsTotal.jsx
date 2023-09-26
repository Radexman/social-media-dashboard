import PropTypes from "prop-types";
import SingleStat from "./SingleStat";

const StatsTotal = ({ mainStats }) => {
  return (
    <div className="relative -top-12">
      <div className="container mx-auto">
        <div className="stats-wrapper">
          {mainStats.map((stat) => {
            const { id } = stat;
            return <SingleStat key={id} stat={stat} />;
          })}
        </div>
      </div>
    </div>
  );
};

StatsTotal.propTypes = {
  mainStats: PropTypes.array.isRequired,
};

export default StatsTotal;
1;
