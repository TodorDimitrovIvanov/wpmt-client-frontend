import React from 'react';
import './Sidebar.scss'
import { useAppSelector } from "../../store/hooks";
import { selectSidebarState } from "../../slices/appSlice";

const Sidebar = () => {

    const sidebarState = useAppSelector(selectSidebarState)
    const classNames = `wpmt-sidebar ${sidebarState ? 'open' : ''}`

    return (
     <div className={classNames}>
     </div>
    )
}
export default Sidebar
