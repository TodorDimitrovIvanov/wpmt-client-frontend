import React from "react";

interface Props {
    children: any;
    className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {

    const classNames = `wpmt-menu wpmt-menu-list__container ${className ? className : ''}`

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default Container;
