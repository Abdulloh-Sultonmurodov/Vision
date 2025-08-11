import {
  AvatarIcon,
  NotificationIcon,
  SearchIcon,
  SetIcon,
} from "../assets/icons";
import { useCookies } from "react-cookie";

const DashboardHeader = ({ item }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const userData = cookies.token;

  function handleLogOut() {
    if (window.confirm("Are you sure to logout?")) {
      removeCookie("token", { path: "/" });
      window.location.reload();
      location("/login");
    }
  }

  return (
    <div className="flex text-center justify-between items-center mt-[22px] ml-[41px] mr-[48px]">
      <div className="flex flex-col items-start gap-[6px]">
        <p className="text-[white]/50 text-[12px]">
          Pages/ <span className="text-[white] text-[12px]">{item.path}</span>
        </p>
        <p className="text-white text-[14px]">{item.path}</p>
      </div>
      <div className="flex gap-[18px] items-center">
        <form
          autoComplete="off"
          className=" border-[0.5px] rounded-[15px] border-[#E2E8F04D] text-white flex items-center gap-[10px] pl-[5px]"
        >
          <SearchIcon />
          <input
            className="w-[199px] h-[40px] outline-none"
            type="text"
            name="search"
            placeholder="Type here..."
          />
        </form>
        <div onClick={handleLogOut} className="flex items-center gap-[5px]">
          <AvatarIcon />
          <p className="text-[#718096] text-[12px]">{userData?.email}</p>
        </div>
        <div className="flex items-center gap-[17px]">
          <SetIcon />
          <NotificationIcon />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
