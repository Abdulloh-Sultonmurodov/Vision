import {
  BillingIcon,
  DashboardHomeIcon,
  SettingIcon,
  StaticIcon,
} from "../assets/icons";

const NavbarList = [
  {
    title: "Dashboard",
    icon: <DashboardHomeIcon />,
    path: "/",
  },
  {
    title: "Tables",
    icon: <StaticIcon />,
    path: "/tables",
  },
  {
    title: "Billing",
    icon: <BillingIcon />,
    path: "/billing",
  },
  {
    title: "RTL",
    icon: <SettingIcon />,
    path: "/rtl",
  },
];

export default NavbarList;
