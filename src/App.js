import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function App() {
    const headerTitle = [
        {name: 'Menu'},
        {name: 'Docs'}
    ];
    const footerUrl = [
        {name: 'React'},
    ];

    return (


        <div className="App">

            <Header title={headerTitle}/>

            <p></p>
            <Content/>
            <p></p>


            <hr></hr>

            <Footer url={footerUrl}/>


        </div>
    );
}

export default App;
