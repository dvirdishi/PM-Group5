import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FiArrowLeftCircle, FiArrowRightCircle, FiUser,FiBookOpen, FiSettings, FiAlignJustify} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import ProfileImg from "../images/profile.png";
import { Link } from 'react-router-dom';
import { collection, getDocs, where, query } from "firebase/firestore";
import "../index.css";


export default function SideBar() {

  const [user, loading] = useAuthState(auth);
  const [Temp_isdoctor,setIsDoctor] = useState([]);
  const navigate = useNavigate();

    const [menuCollapse, setMenuCollapse] = useState(true)
    const [IsActive, setIsActive] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const IconActive = () => {
    IsActive ? setIsActive(false) : setIsActive(true);
  };

  const fetchUserName = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    setIsDoctor(data.isdoctor);
    };

    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/login");
      if(user && user.email == "donacontactmail@gmail.com") return navigate("/Adminpanel");
      fetchUserName();
    }, [user, loading]);
  

  if(Temp_isdoctor == "1")
  {
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
                <MenuItem active={IconActive} icon={<FiSettings />}>
                  Adjustments
                  <Link to="/CalendarAdjustments"></Link>
                </MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </>
    );
  }
  else if(Temp_isdoctor == "0")
  {
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
  else if(user && user.email == "donacontactmail@gmail.com")
  {
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
                <MenuItem active={IconActive} icon={<FiAlignJustify />}>
                  Admin Panel
                  <Link to="/Adminpanel"></Link>
                </MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </>
    );
  }
  else
  {
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
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </>
    );
  }
 
}