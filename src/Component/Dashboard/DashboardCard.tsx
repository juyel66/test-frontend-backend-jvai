import { FaArrowRight } from "react-icons/fa6";

const DashboardCard = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div
          style={{ backgroundImage: "url(/images/background.png)" }}
          className="bg-no-repeat bg-cover   h-[344px] text-white p-5 w-full"
        >
          <div>
            <p className="text-[#A0AEC0]">Welcome back,</p>
            <p className="text-4xl">Mark Johnson</p>
            <p className="text-[#A0AEC0]">
              Glad to see you again! <br /> Ask me anything.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-40 ">
            <p>Tap to record</p>
            <FaArrowRight />
          </div>

        </div>

        <div
        style={{
    background: "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(14, 21, 58, 0.71) 91.2%)"
  }}
         
          className="bg-no-repeat bg-cover  h-[344px]  text-white p-5 w-full"
        >
          <div>
            <p className="text-[#A0AEC0]">Welcome back,</p>
            <p className="text-4xl">Mark Johnson</p>
            <p className="text-[#A0AEC0]">
              Glad to see you again! <br /> Ask me anything.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-40 ">
            <p>Tap to record</p>
            <FaArrowRight />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
