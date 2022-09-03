import React from 'react';
import './MenuCard.scss';

export interface addonStatus {
    pluginStatus: 'updateAvailable' | 'noUpdates' | 'failedUpdate',
    themeStatus: 'updateAvailable' | 'noUpdates' | 'failedUpdate'
}

interface Props {
    status?: addonStatus,
    title: string,
    toolTip?: string
}

const MenuCard: React.FC<Props> = ({ status, title, toolTip }) => {
    return (
        <div className="wpmt-page-menubox">
            <div className="wpmt-menu-card-status"></div>
            <p className="wpmt-menu-card-text">{title}</p>
        </div>
    );
};

export default MenuCard;
