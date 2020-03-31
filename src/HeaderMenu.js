import React from 'react';
import HeaderMenuItem from "./HeaderMenuItem";


function HeaderMenu(props) {
    return (
        <div className="HeaderMenu">

            <HeaderMenuItem menuItems={props.menuItems}/>
        </div>
    );
}

export default HeaderMenu;
