import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

function Header(props) {


    return (
        <div align="center" className="header">
            <h4>{props.menuItems[0].title}</h4>
            <h4>{props.menuItems[1].title}</h4>

            <HeaderLogo/>
            <HeaderMenu menuItems={props.menuItems}/>

            {props.menuItems.url}
        </div>
    );
}

export default Header;
