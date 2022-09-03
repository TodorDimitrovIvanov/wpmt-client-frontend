import menuIcon from "../../assets/HamburgerIcon.svg";
import { Link } from "react-router-dom";
import React from "react";
import './Navbar.scss';
import { closeSidebar, openSidebar, selectSidebarState } from "../../slices/appSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Navbar: React.FC = () => {

    const sidebarState = useAppSelector(selectSidebarState);
    const dispatch = useAppDispatch();

    return (
        <div className="wpmt-navbar-background">
            <div onClick={() => {
                sidebarState ? dispatch(closeSidebar()) : dispatch(openSidebar());
            }} className="wpmt-navbar-menu-item">
                <img className="wpmt-navbar-icon" src={menuIcon}/>
            </div>
            <ul className="wpmt-navbar-items">
                <li>
                    <Link to="/" className="noselect">Dashboard</Link>
                </li>
                <li>
                    <Link to="/domain" className="noselect">Domain</Link>
                </li>
                <li>
                    <Link to="/wordpress" className="noselect">WordPress</Link>
                </li>
                <li>
                    <Link to="/backup" className="noselect">Backup</Link>
                </li>
                <li>
                    <Link to="/Transfer" className="noselect">Transfer</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
