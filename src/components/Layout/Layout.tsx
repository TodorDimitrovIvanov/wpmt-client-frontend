import React from 'react';
import './layout.scss'
import { Link } from "react-router-dom";

export interface commonProps {
    children?: any;
}

const LayoutWPMT: React.FunctionComponent<Partial<commonProps>> = (props: commonProps) => {

    const { children } = props;

    return (
<div className='wpmt-main'>
    <header>
        <div className='wpmt-navbar-background'>
            <ul className='wpmt-navbar-items'>
                <li>
                    <Link to='/' className='noselect' >Dashboard</Link>
                </li>
                <li>
                    <Link to='/domain' className='noselect' >Domain</Link>
                </li>
                <li>
                    <Link to='/wordpress' className='noselect' >WordPress</Link>
                </li>
                <li>
                    <Link to='/backup' className='noselect' >Backup</Link>
                </li>
                <li>
                    <Link to='/Transfer' className='noselect' >Transfer</Link>
                </li>
            </ul>
        </div>
    </header>
    <main>
    <div className='wpmt-main-background'>
        {children}
    </div>
    </main>
</div>
    )
}

export default LayoutWPMT;
