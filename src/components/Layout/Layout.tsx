import React, { useState } from 'react';
import './Layout.scss';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useAppSelector } from "../../store/hooks";

export interface commonProps {
    children?: any;
}

const LayoutWPMT: React.FunctionComponent<Partial<commonProps>> = (props: commonProps) => {

    const isLogged = useAppSelector(state => state.user.current.isLogged)

    const { children } = props;

    return (
        <div className="wpmt-main">
            <Sidebar></Sidebar>
            <header>
                <Navbar/>
            </header>
            <main>
                <div className="wpmt-main-background">
                    {isLogged ? children : <p>Logging you in!</p>}
                </div>
            </main>
        </div>
    );
};

export default LayoutWPMT;
