import React from "react";
import './MenuItem.scss'

export interface itemProps {
    name: string,
    value?: string | number;
}

const MenuItem: React.FC<itemProps> = ({ name, value }) => {


    const renderItem = () => {
        return (
            <div className="wpmt-menu-item">
                <div className="wpmt-menu-item__title">
                    <p>{name}</p>
                </div>
                <div className="wpmt-menu-item__content">
                    <p>{value}</p>
                </div>
            </div>
        );
    };

    return (
        renderItem()
    )
};

export default MenuItem;
