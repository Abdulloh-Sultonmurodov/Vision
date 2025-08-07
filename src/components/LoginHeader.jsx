import {
  DashboardIcon,
  ProfileIcon,
  SignInIcon,
  SignUpIcon,
} from "../assets/icons";
import { Button } from "../components";

const LoginHeader = () => {
  return (
    <div className="login-header w-[987px] h-[70px] rounded-[20px] flex justify-between items-center px-[24px]">
      <div>
        <h2 className="header-h2 text-[14px] ">VISION UI FREE</h2>
      </div>
      <div className="flex gap-[30px] items-center">
        <a
          className="text-[#FFFFFF] text-[10px] font-bold flex gap-[2px] hover:text-[#0075FF] duration-300"
          href="/"
        >
          <DashboardIcon />
          DASHBOARD
        </a>
        <a
          className="text-[#FFFFFF] text-[10px] font-bold flex gap-[2px] hover:text-[#0075FF] duration-300"
          href="/"
        >
          <ProfileIcon />
          PROFILE
        </a>
        <a
          className="text-[#FFFFFF] text-[10px] font-bold flex gap-[2px] hover:text-[#0075FF] duration-300"
          href="/"
        >
          <SignUpIcon />
          SIGN UP
        </a>
        <a
          className="text-[#FFFFFF] text-[10px] font-bold flex gap-[2px] hover:text-[#0075FF] duration-300"
          href="/"
        >
          <SignInIcon />
          SIGN IN
        </a>
      </div>
      <div>
        <Button classList="!px-[30px] !py-[10px] !mt-0">Free Download</Button>
      </div>
    </div>
  );
};

export default LoginHeader;
