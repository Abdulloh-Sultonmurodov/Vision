import { useNavigate } from "react-router-dom";
import { Input, LoginHeader, Button, SwitchBtn } from "../../components";
import { useContext } from "react";
import { Context } from "../../Context/GlobalContext";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  // const [_cookies, setCookies] = useCookies(["token"]);
  // const { registerData } = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (!registerData) {
      if (data.email == "abdulloh@gmail.com" && data.password == "123") {
        setCookies("token", data);
      }
    } else {
      if (
        data.email == registerData.email &&
        data.password == registerData.password
      ) {
      }
    }
  }
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
        <div className="w-[350px] ml-[103px] mt-[155px]">
          <div>
            <h2 className="font-bold text-[30px] text-white">
              Nice to see you!
            </h2>
            <p className="text-[14px] text-[#A0AEC0] ">
              Enter your email and password to sign in
            </p>
          </div>
          <div className="mt-[35px]">
            <form onClick={handleSubmit} className="flex flex-col gap-[25px]">
              <label className="text-white">
                <p>Email</p>
                <Input type="email" placeholder="Your email address" />
              </label>
              <label className="text-white">
                <p>Password</p>
                <Input type="password" placeholder="Your password" />
              </label>
            </form>
          </div>
          <div className="mt-[24px] flex gap-[10px]">
            <SwitchBtn />
            <p className="text-[12px] text-white">Remember me </p>
          </div>
          <Button>SIGN IN</Button>
          <p className="mt-[23px] text-center text-[#A0AEC0]">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-white hover:text-[#0075FF] duration-300"
            >
              Sign Up
            </span>
          </p>
        </div>
        <div className="mt-[62px] ml-[61px]">
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
