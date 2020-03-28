import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

function Header(props) {


    return (
        <div className="Header">
            <h4>{props.title[0].name}</h4> <h4>{props.title[1].name}</h4>

            <HeaderLogo/>
            <HeaderMenu/>
        </div>
    );
}

export default Header;
