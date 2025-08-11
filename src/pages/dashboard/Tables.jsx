import { AddIcon, MoreIcon, TicIcon, XDIcon } from "../../assets/icons";
import { User1 } from "../../assets/images";
import { DashboardFooter, DashboardHeader } from "../../components";

const Tables = () => {
  return (
    <div>
      <DashboardHeader item={{ path: "Tables" }} />
      <div className="flex flex-col justify-center items-center gap-[24px] my-[28px] mx-[24px]">
        <div className="w-[1100px] h-[488px] rounded-[20px] table-bg py-[25px] px-[22px]">
          <div className="flex justify-between">
            <h2 className="text-white text-[18px]">Authors Table</h2>
            <button className="text-white hover:text-[#0075FF] cursor-pointer">
              <AddIcon />
            </button>
          </div>
          <div>
            <div className="flex mt-[23px] border-b-[1px] border-[#56577A] pb-[12px]">
              <p className="text-[#A0AEC0] text-[10px] mr-[450px]">AUTHOR</p>
              <p className="text-[#A0AEC0] text-[10px] mr-[110px]">FUNCTION</p>
              <p className="text-[#A0AEC0] text-[10px] mr-[110px]">STATUS</p>
              <p className="text-[#A0AEC0] text-[10px] mr-[110px]">EMPLOYED</p>
            </div>
            <div className="flex items-center my-[10px] border-b-[1px] border-[#56577A] pb-[12px]">
              <div className="flex items-center gap-[15px] mr-[280px]">
                <img src={User1} alt="Users" width={40} height={40} />
                <div>
                  <p className="text-white text-[10px]">Esthera Jackson</p>
                  <p className="text-[#A0AEC0] text-[14px]">
                    esthera@simmmple.com
                  </p>
                </div>
              </div>
              <div className="mr-[65px]">
                <p className="text-[14px] text-white">Manager</p>
                <p className="text-[14px] text-[#A0AEC0]">Organization</p>
              </div>
              <div className="rounded-[8px] bg-[#01B574] w-[65px] h-[25px] flex items-center justify-center mr-[90px]">
                Online
              </div>
              <div className="mr-[100px]">
                <p className="text-white text-[14px] mr-[10px]">14/06/21</p>
              </div>
              <div>
                <p className="text-[#A0AEC0] text-[14px]">Edit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1100px] h-[453px] rounded-[20px] table-bg py-[25px] px-[22px]">
          <div className="flex justify-between">
            <h2 className="text-white text-[18px]">Projects</h2>
            <button className="text-white hover:text-[#0075FF] cursor-pointer">
              <AddIcon />
            </button>
          </div>
          <div className="flex items-center gap-[5px] mt-[6px] mb-[28px]">
            <TicIcon />
            <p className="text-[#A0AEC0] text-[14px]">30 done this month</p>
          </div>
          <div>
            <div className="flex mt-[23px] border-b-[1px] border-[#56577A] pb-[12px]">
              <p className="text-[#A0AEC0] text-[10px] mr-[450px]">COMPANIES</p>
              <p className="text-[#A0AEC0] text-[10px] mr-[110px]">BUDGET</p>
              <p className="text-[#A0AEC0] text-[10px] mr-[110px]">STATUS</p>
              <p className="text-[#A0AEC0] text-[10px] mr-[110px]">
                COMPLETION
              </p>
            </div>
            <div className="flex items-center my-[19px] border-b-[1px] border-[#56577A] pb-[12px]">
              <div className="flex items-center gap-[17px] mr-[365px]">
                <XDIcon />
                <p className="text-white text-[10px]">Chakra Soft UI Version</p>
              </div>
              <div className="mr-[95px]">
                <p className="text-[14px] text-white">$14,000</p>
              </div>
              <div className="mr-[100px]">
                <p className="text-[14px] text-white">Working</p>
              </div>
              <div className="mr-[130px]">
                <p className="text-white text-[14px] mr-[10px]">60%</p>
              </div>
              <div>
                <MoreIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default Tables;
