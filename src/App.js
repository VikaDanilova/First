import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function App() {
    const menuItems = [
        {title: 'Menu',
        url: 'www.menu.com'},
        {title: 'Docs',
        url: 'www.docs.com'}
    ];
    const footerItem = [
        {title: 'React',
        url: 'www.react.com'}
    ];

    return (


        <div className="App">

            <Header menuItems={menuItems}/>

            <p></p>
            <Content/>
            <p></p>


            <hr></hr>

            <Footer footerItem={footerItem}/>


        </div>
    );
}

export default App;
