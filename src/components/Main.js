import React from 'react';
// import horneddata from '../data/horneddata.json';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {

    render() {
        return (
        <div>
            <CardGroup className="container">
                {this.props.horneddata.map((item,index)=>
                // 😎😋😋😊
                <HornedBeast 
                key={index} 
                imgUrl={item.image_url} 
                title={item.title} 
                description={item.description}
                horns={item.horns}
                displayCardAsModel={this.props.displayCardAsModel}
                handleClose={this.props.selectedHorned}
                />
                )}
            </CardGroup>
        </div>
        )
    }
}

export default Main;