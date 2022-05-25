import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FiArrowLeftCircle, FiArrowRightCircle, FiUser,FiBookOpen} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import ProfileImg from "../images/profile.png";
import { Link } from 'react-router-dom';
import "../index.css";


export default function SideBar() {

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading]);

    const [menuCollapse, setMenuCollapse] = useState(true)
    const [IsActive, setIsActive] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const IconActive = () => {
    IsActive ? setIsActive(false) : setIsActive(true);
  };
  
  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <p>{menuCollapse ? <img src={ProfileImg} alt='profile image' className="SmallSideBarProfilePic"></img>   : <img src={ProfileImg} alt='profile image' className="BigSideBarProfilePic"></img>  }</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={IconActive} icon={<FiUser />}>
                My Profile
                <Link to="/profile"></Link>
              </MenuItem>
              <MenuItem active={IconActive} icon={<RiPencilLine />}>
                My Meetings
                <Link to="/MyMeetings"></Link>
                </MenuItem>
              <MenuItem active={IconActive} icon={<FiBookOpen />}>
                Summaries
                <Link to="/MeetingsSummary"></Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
}