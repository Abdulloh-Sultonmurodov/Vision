import { useNavigate } from "react-router-dom";
import { Input, LoginHeader, Button, SwitchBtn } from "../../components";
import { useContext } from "react";
import { Context } from "../../Context/GlobalContext";

const Register = () => {
  const navigate = useNavigate();
  const { setRegisterData } = useContext(Context);

  function handleRegisterSubmit(e) {
    e.preventDefault();
    const data = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    setRegisterData(data);
    navigate("/login");
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
        <div className="w-[452px] ml-[103px] mt-[100px]">
          <div className="flex flex-col gap-[11px] text-center">
            <h2 className="font-bold text-[30px] text-white">Welcome! </h2>
            <p className="text-[14px] text-[#A0AEC0] ">
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </div>
          <div className="mt-[14px] px-[51px] py-[15px] rounded-[30px] border-[2px]">
            <form onSubmit={handleRegisterSubmit}>
              <label className="text-white">
                <p>Name</p>
                <Input
                  type="text"
                  name={"fullname"}
                  placeholder="Your full name"
                />
              </label>
              <label className="text-white">
                <p>Email</p>
                <Input
                  type="email"
                  name={"email"}
                  placeholder="Your email address"
                />
              </label>
              <label className="text-white">
                <p>Password</p>
                <Input
                  type="password"
                  name={"password"}
                  placeholder="Your password"
                />
              </label>
              <div className="mt-[24px] flex gap-[10px]">
                <SwitchBtn />
                <p className="text-[12px] text-white">Remember me </p>
              </div>
              <Button>SIGN IN</Button>
            </form>
            <p className="mt-[13px] text-center text-[#A0AEC0]">
              Already have an account?
              <span
                onClick={() => navigate("/login")}
                className="text-white hover:text-[#0075FF] duration-300"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
        <div className="mt-[32px] ml-[110px] flex justify-center flex-col">
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

export default Register;
