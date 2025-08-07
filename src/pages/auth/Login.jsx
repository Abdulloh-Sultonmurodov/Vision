import { Input, LoginHeader, Button, SwitchBtn } from "../../components";

const Login = () => {
  return (
    <div className="flex relative">
      <div className="absolute flex justify-center top-[24px] right-[200px] left-[200px]">
        <LoginHeader />
      </div>
      <div className="login-bg w-[50%] h-[100vh] text-center flex flex-col justify-center gap-[16px]">
        <p className="text-[20px] text-white">INSPIRED BY THE FUTURE:</p>
        <h2 className="font-bold text-[36px] login-title">
          THE VISION UI DASHBOARD
        </h2>
      </div>
      <div className="login-password w-[50%] h-[100vh]">
        <div className="w-[350px] ml-[103px] mt-[185px]">
          <div>
            <h2 className="font-bold text-[30px] text-white">
              Nice to see you!
            </h2>
            <p className="text-[14px] text-[#A0AEC0] ">
              Enter your email and password to sign in
            </p>
          </div>
          <div className="mt-[35px]">
            <label className="text-white flex flex-col gap-[25px]">
              <div>
                <p>Email</p>
                <Input type="text" placeholder="Your email address" />
              </div>
              <div>
                <p>Password</p>
                <Input type="password" placeholder="Your password" />
              </div>
            </label>
          </div>
          <div className="mt-[24px] flex gap-[10px]">
            <SwitchBtn />
            <p className="text-[12px] text-white">Remember me </p>
          </div>
          <Button>SIGN IN</Button>
          <p className="mt-[23px] text-center text-[#A0AEC0]">
            Don't have an account?{" "}
            <a
              className="text-white hover:text-[#0075FF] duration-300"
              href="/"
            >
              Sign Up
            </a>
          </p>
        </div>
        <div className="mt-[162px] ml-[61px]">
          <div>
            <p className="text-[#A0AEC0] text-[14px] lh-[150%]">
              @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
            </p>
          </div>
          <div className="flex gap-[46px] mt-[9px] ml-[100px]">
            <a
              className="text-[#A0AEC0] text-[14px] hover:text-[#0075FF] duration-300"
              href="/"
            >
              Marketplace
            </a>
            <a
              className="text-[#A0AEC0] text-[14px] hover:text-[#0075FF] duration-300"
              href="/"
            >
              Blog
            </a>
            <a
              className="text-[#A0AEC0] text-[14px] hover:text-[#0075FF] duration-300"
              href="/"
            >
              License
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
