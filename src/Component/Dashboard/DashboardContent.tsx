import DashboardCard from "./DashboardCard";
import TodaysCard from "./TodaysCard";

const DashboardContent = () => {
  return (
   <div>
    <TodaysCard></TodaysCard>
    <div className="mt-5">
        <DashboardCard></DashboardCard>
    </div>



   </div>
  );
};

export default DashboardContent;
