import React from 'react';
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";


function Footer(props) {
    return (
        <div className ="App">

            <FooterMenu/>
            <FooterContact/>


            <a href="https://ru.reactjs.org/" target="_blank">  <h4>{props.url[0].name}</h4> </a>

        </div>
    );
}

export default Footer;
