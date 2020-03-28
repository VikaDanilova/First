import React from 'react';
import HeaderMenuItem from "./HeaderMenuItem";

const HeadrMenuItem = [
    {name: 'Home'},
    {name: 'About'},
    {name: 'Contacts'}
];
function HeaderMenu() {
    return (
        <div className="Header">

<HeaderMenuItem items={HeadrMenuItem} />
        </div>
    );
}

export default HeaderMenu;
