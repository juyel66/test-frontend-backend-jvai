import Charts from "./Charts";
import DashboardCard from "./DashboardCard";
import TodaysCard from "./TodaysCard";

const DashboardContent = () => {
  return (
   <div>
    <TodaysCard></TodaysCard>
    <div className="mt-5">
        <DashboardCard></DashboardCard>
    </div>
    <div>
      <Charts></Charts>
    </div>



   </div>
  );
};

export default DashboardContent;
