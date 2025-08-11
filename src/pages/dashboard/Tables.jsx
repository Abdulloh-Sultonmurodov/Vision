import { DashboardFooter, DashboardHeader } from "../../components";
import { Author, Projects } from "../../modules";

const Tables = () => {
  return (
    <div>
      <DashboardHeader item={{ path: "Tables" }} />
      <div className="flex flex-col justify-center items-center gap-[24px] my-[28px] mx-[24px]">
        <Author />
        <Projects />
      </div>
      <DashboardFooter />
    </div>
  );
};

export default Tables;
