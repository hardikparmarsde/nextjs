import Image from "next/image";
import { AppManagementIcon, AppManagementPrimaryIcon, DashboardIcon, DashboardPrimaryIcon, DeviceManagementIcon, DeviceManagementPrimaryIcon, FileManagementIcon, FileManagementPrimaryIcon, ProfileIcon, ProfilePrimaryIcon, TrackingTimeIcon, TrackingTimePrimaryIcon, UserManagementIcon, UserManagementPrimaryIcon } from "../../../../public/assets/images";
import { ListItemButton, ListItemText } from "@mui/material";
export const ListItem = (props) => {
  const { router, activeTab, primaryIcon, icon, setActiveTab, location, name, isLaptop } = props;
  return (
  <ListItemButton
    key={location}
    className={router.pathname === activeTab ? 'sidebar-active-btn' : 'sidebar-btn'}
    onClick={() => {
      router.push(location)
      setActiveTab(location)
    }}
  >
    {router.pathname === activeTab ? primaryIcon : icon}
    <ListItemText>
      {router.pathname === activeTab && !isLaptop ? `${name.length > 15 ? `${name.substring(0, 15)}..` : name}` : name}
    </ListItemText>
  </ListItemButton>
  )
}
export const ListItemb = [
  {
    name: "Dashboard",
    location: "/admin/dashboard",
    isRoute: true,
    value: false,
    icon: <Image src={DashboardIcon} alt="Dashboard" />,
    activeIcon: <Image src={DashboardPrimaryIcon} alt="Dashboard" />,
    dropdownList: [],
  },
  {
    name: "Device Management",
    location: "/devicemanagement",
    isRoute: true,
    value: false,
    icon: <Image src={DeviceManagementIcon} alt="Live Video Stream" />,
    activeIcon: <Image src={DeviceManagementPrimaryIcon} alt="Live Video Stream" />,
    dropdownList: [],
  },
  {
    name: "User Management",
    location: "/usermanagement",
    value: false,
    icon: <Image src={UserManagementIcon} alt="Stored Videos" />,
    activeIcon: <Image src={UserManagementPrimaryIcon} alt="Live Video Stream" />,
    dropdownList: [],
  },
  {
    name: "App Management",
    location: "/appmanagement",
    isRoute: true,
    value: false,
    icon: <Image src={AppManagementIcon} alt="Share Recording" />,
    activeIcon: <Image src={AppManagementPrimaryIcon} alt="Live Video Stream" />,
    dropdownList: [],
  },
  {
    name: "Tracking Management",
    location: "/trackingmanagement",
    isRoute: true,
    value: false,
    icon: <Image src={TrackingTimeIcon} alt="Schedule Recording" />,
    activeIcon: <Image src={TrackingTimePrimaryIcon} alt="Live Video Stream" />,
    dropdownList: [],
  },
  {
    name: "File Management",
    location: "/filemanagement",
    isRoute: true,
    value: false,
    icon: <Image src={FileManagementIcon} alt="Schedule Recording" />,
    activeIcon: <Image src={FileManagementPrimaryIcon} alt="Live Video Stream" />,
    dropdownList: [],
  },
  {
    name: "My Profile",
    location: "/myprofile",
    isRoute: true,
    value: false,
    icon: <Image src={ProfileIcon} alt="Schedule Recording" />,
    activeIcon: <Image src={ProfilePrimaryIcon} alt="Schedule Recording" />,
    dropdownList: [],
  },
];

export default ListItem;
