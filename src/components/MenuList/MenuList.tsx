import React from 'react';
import MenuItem from "./MenuItem/MenuItem";
import './MenuList.scss';
import { getIconAltName } from "../../utils/icon";
import Container from "../Container/Container";

export interface CommonProps {
    flex?: Boolean;
}

interface Props extends CommonProps {
    items?: any;
    title: string;
    icon: string;
    children?: any;
}

const MenuList: React.FC<Props> = ({ items, title, icon, children, flex }) => {

    const classNames = `${flex ? 'wpmt-menu-container__flex' : ''}`;

    return (
        <Container>
            <div className="wpmt-menu-list__section-title">
                <img className="wpmt-menu-list__section-title-icon" alt={getIconAltName(icon)} src={icon}/>
                <p className="wpmt-menu-item__section-title-text">{title}</p>
            </div>
            {items ? items.map((item: { name: string; value: string | number; }) => <MenuItem key={item.name}
                                                                                              name={item.name}
                                                                                              value={item.value}/>) : null}
            <div className={classNames}>
                {children}
            </div>
        </Container>
    );

};

export default MenuList;
