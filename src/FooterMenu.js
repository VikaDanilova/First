import React from 'react';

const onButtonClick = (n) => {

    console.log(n);
};
const menu = [
    {name: 'Docs'},
    {name: 'Channels'},
    {name: 'Community'},
    {name: 'More'},
];

function FooterMenu() {
    return (
        <div className="App">

            {menu.map(el => <button key={el} onClick={() => onButtonClick(el)}>{el.name} </button>)}


        </div>
    );
}

export default FooterMenu;
