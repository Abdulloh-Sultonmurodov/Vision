import { Help } from "../assets/images";
import NavbarList from "../components/NavbarList";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[20%] overflow-y-auto p-[10px]">
      <div className="navbar-bg h-[1135px] text-center">
        <div className="border-b-[1px] py-[34px] px-[65px] mx-[15px] border-[white]">
          <h2 className="text-[14px] navbar-h2-text">VISION UI FREE</h2>
        </div>
        <div className="text-white px-[22px] pt-[22px] flex flex-col gap-[12px]">
          {NavbarList.map((item, id) => (
            <NavLink
              key={id}
              className="flex gap-[15px] items-center cursor-pointer py-[12px] pl-[16px] "
              to={item.path}
            >
              <div className="nav-icon-bg rounded-[12px] w-[30px] h-[30px] bg-[#1A1F37] flex items-center justify-center text-[#0075FF]">
                {item.icon}
              </div>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex justify-center">
          <img
            className="w-[218px] h-[169px] mx-[23px] mt-[200px]"
            src={Help}
            alt="Help image"
            width={218}
            height={169}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
