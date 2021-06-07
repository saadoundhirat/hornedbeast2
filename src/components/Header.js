import React from 'react'
import saad from '../images/saad.png'

class Header extends React.Component {
    render() {
        return (
            <div className="headcontainer">
                <div className="imgcontainer">
                <img src={saad} title="SaadounDhirat" alt="saadoun"/>
                </div>
                <h1 className="header"> HornedBeast</h1>
            </div>
        );
    }
}

export default Header;