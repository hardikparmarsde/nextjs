import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AvatarImage, Logo} from "../../public/assets/images";
import Index from "./sidebar/Index";
import MenuIcon from '@mui/icons-material/Menu';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutDialog from "../common/LogoutDialog";

export default function AdminLayout({ children, window }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [openLM, setOpenLM] = useState(false);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const pathname = router.pathname;
  const name = pathname.split("/").filter(Boolean).join("/");
  const segmentsArray = name.split("/");
  const [anchorElUser, setAnchorElUser] = useState(null);

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // Handle mobile sidebar opening/closing
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // Define the content of the sidebar drawer
  const drawer = (
    <Box className="">
      <Toolbar className="logo-wrapper my-[5px] 3xl:mb-[20px] 3xl:mt-[20px]">
        <Image src={Logo} alt="Logo" className="2xl:w-[150px] w-[140px] h-[35px] cursor-pointer 2xl:h-[35px] 3xl:w-[164px] 3xl:h-[45px]" />
      </Toolbar>
      <Box className="sidebar-items-list">
        <List><Index closeSidebar={handleDrawerToggle} /></List>
      </Box>
    </Box>
  );

  //Handle open for user menu
  const handleClick = (event) => { setAnchorEl(event.currentTarget); };

  //Handle close for user menu
  const handleClose = () => { setAnchorEl(null); };

  //Handle open for logout modal
  const OpenLogoutDialog = () => { setOpenLM(true); };

  //Handle close for logout Dialog
  const CloseLogoutDialog = () => { setOpenLM(false); };


  if (isLoading) { return (<Box className="main-box"><Loader loading={isLoading} /></Box>) }
  return (
    <Box className="min-h-screen bg-[#1B2531]" >
      <CssBaseline />
      <Box className="sidebar-nav" component="nav">
        <Drawer
          className="sidebar-wrapper small-screen-sidebar"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          className="sidebar-wrapper large-screen-sidebar"
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="header-appbar">
          <Toolbar className="header-wrapper">
            <IconButton
              className="menu-button"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>            
            <div className="header-menu">
              <Button
                disableTouchRipple
                disableElevation
                className="profile-header-button"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <div className="flex gap-2 2xl:gap-4 items-center">
                  <Image
                    src={AvatarImage}
                    alt="Profile"
                    height={40}
                    width={40}
                    className="rounded-full w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] object-cover"
                  />
                  <Box className="flex items-center gap-2">
                    <div className="sm:flex flex-col items-start hidden">
                      <p className="xs:hidden sm:block font-poppins font-medium text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-white m-0 capitalize">Hardik Parmar</p>
                      <p className="xs:hidden sm:block font-poppins text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[#A1A1A1] m-0 capitalize">Admin</p>
                    </div>
                    <ArrowDropDownIcon sx={{ color: "#232323" }} />
                  </Box>
                </div>
              </Button>
              <Menu
                id="basic-menu"
                className="profile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  minWidth: 200
                }}
              >
                <MenuItem
                  onClick={() => {
                    router.push("/myprofile");
                    handleClose();
                  }}
                  className="flex items-center gap-3 font-poppins"
                  style={{ color: `${router.pathname === '/myprofile' ? '#fff' : '#c7cbcf'}` }}
                >
                  <SettingsRoundedIcon sx={{ color: `${router.pathname === '/myprofile' ? '#fff' : '#c7cbcf'}` }} />
                  Account Settings
                </MenuItem> 
                {/* <Divider className="profile-menu-divider" /> */}
                <MenuItem
                  onClick={OpenLogoutDialog}
                  className="flex items-center gap-3"
                  style={{ color: `${openLM ? '#fff' : '#c7cbcf'}` }}
                >
                  <LogoutRoundedIcon sx={{ color: `${openLM ? '#fff' : '#c7cbcf'}` }} />
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Box className="main-content-box" component="main">
          {children}
        </Box>
      </Box>
      {openLM && <LogoutDialog CloseLogoutDialog={CloseLogoutDialog} />}
    </Box>
  );
}