import React from 'react';
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";


function Footer(props) {
    return (
        <div align="center" className="footer">

            {props.footerItem[0].title}
            {props.footerItem[0].url}

            <FooterMenu/>
            <FooterContact/>




        </div>
    );
}

export default Footer;
