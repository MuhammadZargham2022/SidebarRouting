import {
  PiGearBold,
  PiSignOutBold,
  PiUserBold,
  PiHouseSimpleBold,
  PiFileTextBold,
  PiCalendarBlankBold  
} from "react-icons/pi";


const sidebarElement = [
  {
    menuHeading: 'Settings',
    title: "Dashboard",
    path: "/",
    icon: PiHouseSimpleBold,
  },
  {
    title: "Audience",
    path: "/audience",
    icon: PiUserBold,
    submenu: [
      {
        subtitle: "User",
        subpath: "user",
      },
      {
        subtitle: "Subscriber",
        subpath: "subscriber",
      },
    ],
  },
  {
    title: "Posts",
    path: "/Posts",
    icon: PiFileTextBold,
  },
  {
    title: "Schedules",
    path: "/schedules",
    icon: PiCalendarBlankBold,
  },
  {
    menuHeading: 'Settings',
    title: "Settings",
    path: "/settings",
    icon: PiGearBold,
  },
  {
    menuHeading: "Account",
    title: "Logout",
    path: "/logout",
    icon: PiSignOutBold,
  },
];

export default sidebarElement


