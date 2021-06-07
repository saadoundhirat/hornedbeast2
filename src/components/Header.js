import React from 'react'
import saad from '../images/saad.png'
import coding from '../images/coding.jpg'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            myImage:saad,
            title:"saadoun"
        }
    }
    changeimage =()=>{
        this.setState({
            myImage:coding,
            title:"coding"
        })
    }
    render() {
        return (
            <div className="headcontainer">
                <div className="imgcontainer">
                <img src={this.state.myImage} title={this.state.title} alt="saadoun" onClick={this.changeimage}/>
                </div>
                <h1 className="header"> HornedBeast</h1>
            </div>
        );
    }
}

export default Header;