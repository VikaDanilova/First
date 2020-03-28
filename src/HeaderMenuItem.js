import React from 'react';

function HeaderMenuItem(props) {


    return (
        <div className="Header">
            <h4>{props.items[0].name} | {props.items[1].name} | {props.items[2].name}</h4>
        </div>
    );
}

export default HeaderMenuItem;
