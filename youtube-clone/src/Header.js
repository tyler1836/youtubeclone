import React from "react";
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon />
                <PlayArrowIcon />
            </div>
            <div className="header-input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header-inputButton"/>
            </div>
            <div className="header-icons">
                <VideoCallIcon className="header-icon"/>
                <AppsIcon className="header-icon"/>
                <NotificationsIcon className="header-icon"/>
                <Avatar src="https://yt3.ggpht.com/yti/APfAmoG0rrNhSkf6rwGY_evPZ2CDyhZTdMNXcbq4RKhuTA=s88-c-k-c0x00ffffff-no-rj-mo" />
            </div>
        </div>
    )
}

export default Header;