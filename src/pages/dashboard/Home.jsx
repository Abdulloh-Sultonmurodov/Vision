import {
  MarkJohnson,
  ReferalTracking,
  SatisfactionRate,
  TodayMoney,
  TodayUser,
  NewClient,
  TotalSales,
  SecondCard,
  FirstCard,
  FirstLastCard,
  SecondLastCard,
} from "../../assets/images";
import { DashboardFooter, DashboardHeader } from "../../components";

const Home = () => {
  return (
    <div>
      <DashboardHeader item={{ path: "Dashboard" }} />
      <div className="flex flex-col justify-between mx-[23px] mb-[30px]">
        <div className="mt-[29px] mb-[23px] flex justify-center gap-[24px]">
          <img
            className="w-[250px] h-[80px]"
            src={TodayMoney}
            alt="Image"
            width={382}
            height={80}
          />
          <img
            className="w-[250px] h-[80px]"
            src={TodayUser}
            alt="Image"
            width={382}
            height={80}
          />
          <img
            className="w-[250px] h-[80px]"
            src={NewClient}
            alt="Image"
            width={382}
            height={80}
          />
          <img
            className="w-[250px] h-[80px]"
            src={TotalSales}
            alt="Image"
            width={382}
            height={80}
          />
        </div>
        <div className="flex items-center justify-center gap-[23px]">
          <img
            className="w-[370px] h-[344px]"
            src={MarkJohnson}
            alt="Image"
            width={600}
            height={344}
          />
          <img
            className="w-[300px] h-[344px]"
            src={SatisfactionRate}
            alt="Image"
            width={320}
            height={344}
          />
          <img
            className="w-[370px] h-[344px]"
            src={ReferalTracking}
            alt="Image"
            width={500}
            height={344}
          />
        </div>
        <div className="flex justify-center gap-[24px] mt-[24px]">
          <img
            className="w-[540px] h-[445px]"
            src={SecondCard}
            alt="Image"
            width={924}
            height={445}
          />
          <img
            className="w-[540px] h-[445px]"
            src={FirstCard}
            alt="Image"
            width={652}
            height={445}
          />
        </div>
        <div className="flex justify-center gap-[24px] mt-[24px]">
          <img
            className="w-[550px] h-[519px]"
            src={FirstLastCard}
            alt="Image"
            width={1057}
            height={519}
          />
          <img
            className="w-[550px] h-[519px]"
            src={SecondLastCard}
            alt="Image"
            width={519}
            height={519}
          />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default Home;
