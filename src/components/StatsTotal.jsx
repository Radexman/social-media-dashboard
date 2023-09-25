import PropTypes from "prop-types";
import SingleStat from "./SingleStat";

const StatsTotal = ({ mainStats }) => {
  return (
    <div className="relative -top-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 md:px-0 lg:grid-cols-4">
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
