import React from 'react';

function HeaderMenuItem(props) {


    return (
        <div className="HeaderMenuItem">

            {props.menuItems.map(el => <li key={el.title}> {el.title}</li>)}
        </div>
    );
}

export default HeaderMenuItem;
