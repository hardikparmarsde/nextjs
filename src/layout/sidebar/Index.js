
import { Box, Button, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AppManagementIcon, AppManagementPrimaryIcon, DashboardIcon, DashboardPrimaryIcon, DeviceManagementIcon, DeviceManagementPrimaryIcon, FileManagementIcon, FileManagementPrimaryIcon, ProfileIcon, ProfilePrimaryIcon, TrackingTimeIcon, TrackingTimePrimaryIcon, UserManagementIcon, UserManagementPrimaryIcon } from '../../../public/assets/images';

const Index = ({ closeSidebar }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("/admin/dashboard");
  const [isLaptop, setIsLaptop] = useState(true);


  // useEffect(() => {
  //   if (window?.innerWidth < 1680) {
  //     setIsLaptop(true)
  //   }
  // }, [window?.innerWidth])

  return (
    <Box className="flex flex-col justify-between">
      <Box>
      <ListItemButton
        key={"/admin/dashboard"}
        className={router.pathname.includes("/admin/dashboard") ? 'sidebar-active-btn' : 'sidebar-btn'}
        onClick={() => {
          router.push("/admin/dashboard")
          setActiveTab("/admin/dashboard")
        }}
      >
        {router.pathname.includes("/admin/dashboard") ? <Image src={DashboardPrimaryIcon} alt='dashbaord' /> : <Image src={DashboardIcon} alt='dashbaord' />}
        <ListItemText>
          Dashboard
        </ListItemText>
      </ListItemButton>
      <ListItemButton
        key={"/admin/devicemanagement"}
        className={router.pathname === "/admin/devicemanagement" ? 'sidebar-active-btn' : 'sidebar-btn'}
        onClick={() => {
          router.push("/admin/devicemanagement")
          setActiveTab("/admin/devicemanagement")
        }}
      >
        {router.pathname === "/admin/devicemanagement" ? <Image src={DeviceManagementPrimaryIcon} alt="device" /> : <Image src={DeviceManagementIcon} alt='device' />}
        <ListItemText>
          Device Management
        </ListItemText>
      </ListItemButton>
      <ListItemButton
        key={"/admin/appmanagement"}
        className={router.pathname === "/admin/appmanagement" ? 'sidebar-active-btn' : 'sidebar-btn'}
        onClick={() => {
          router.push("/admin/appmanagement")
        }}
      >
        {router.pathname === "/admin/appmanagement" ? <Image src={AppManagementPrimaryIcon} alt="device" /> : <Image src={AppManagementIcon} alt='device' />}
        <ListItemText>
          App Management
        </ListItemText>
      </ListItemButton>
      <ListItemButton
        key={"/admin/usermanagement"}
        className={router.pathname === "/admin/usermanagement" ? 'sidebar-active-btn' : 'sidebar-btn'}
        onClick={() => {
          router.push("/admin/usermanagement")
        }}
      >
        {router.pathname === "/admin/usermanagement" ? <Image src={UserManagementPrimaryIcon} alt="user" /> : <Image src={UserManagementIcon} alt='user' />}
        <ListItemText>
          User Management
        </ListItemText>
      </ListItemButton>
      <ListItemButton
        key={"/admin/trackingmanagement"}
        className={router.pathname === "/admin/trackingmanagement" ? 'sidebar-active-btn' : 'sidebar-btn'}
        onClick={() => {
          router.push("/admin/trackingmanagement")
        }}
      >
        {router.pathname === "/admin/trackingmanagement" ? <Image src={TrackingTimePrimaryIcon} alt="user" /> : <Image src={TrackingTimeIcon} alt='user' />}
        <ListItemText>
          {isLaptop ? "Tracking Manage.." : "Tracking Managegement"}
        </ListItemText>
      </ListItemButton>
      <ListItemButton
        key={"/admin/filemanagement"}
        className={router.pathname === "/admin/filemanagement" ? 'sidebar-active-btn' : 'sidebar-btn'}
        onClick={() => {
          router.push("/admin/filemanagement")
        }}
      >
        {router.pathname === "/admin/filemanagement" ? <Image src={FileManagementPrimaryIcon} alt="file" /> : <Image src={FileManagementIcon} alt='file' />}
        <ListItemText>
          File Managegement
        </ListItemText>
      </ListItemButton>
      <ListItemButton
        key={"/myprofile"}
        className={router.pathname === "/myprofile" ? 'sidebar-active-btn' : 'sidebar-btn'}
        onClick={() => {
          router.push("/myprofile")
        }}
      >
        {router.pathname === "/myprofile" ? <Image src={ProfilePrimaryIcon} alt="file" /> : <Image src={ProfileIcon} alt='file' />}
        <ListItemText>
          My Profile
        </ListItemText>
      </ListItemButton>
      </Box>
     
    </Box>
  );
};

export default Index;


