import { useContext } from "react";
import { StatsContext } from "../context/StatsProvider";
import SingleStat from "./SingleStat";

const StatsTotal = () => {
  const { mainStats } = useContext(StatsContext);

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

export default StatsTotal;
