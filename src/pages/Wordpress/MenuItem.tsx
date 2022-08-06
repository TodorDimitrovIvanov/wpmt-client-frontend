import React from "react";

export interface itemProps {
    name: string,
    value?: string | number;
    icon?: string;
    iconAlt?: string;
    type: "title" | "item"
}

const MenuItem: React.FC<itemProps> = ({ name, value, icon,type, iconAlt }) => {


    const renderItem = () => {
        return (
            <div className="wpmt-menu-item">
                <div className="wpmt-wordpress_core__menu-item-text">
                    <p>{name}</p>
                </div>
                <div className="wpmt-wordpress_core__menu-item-information">
                    <p>{value}</p>
                </div>
            </div>
        );
    };

    const renderTitle = () => {
        return (
            <div className="wpmt-menu wpmt-wordpress_core__title">
                <img className="wpmt-menu wpmt-wordpress_core__title-icon" alt={iconAlt} src={icon}/>
                <p className="wpmt-wordpress_core__text">{name}</p>
            </div>
        );
    };

    if (type === 'title') {
        return renderTitle()
    }

    return (
        renderItem()
    )
};

export default MenuItem;
