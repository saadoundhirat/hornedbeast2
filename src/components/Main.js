import React from 'react';
import horneddata from '../data/horneddata.json';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {

    render() {
        return (
            <div>
            <CardGroup className="container">
            {horneddata.map((item,index)=>
              <HornedBeast 
              key={index} 
              imgUrl={item.image_url} 
              title={item.title} 
              description={item.description}
              horns={item.horns}
              />
              )}
          </CardGroup>
          </div>
        )
    }
}

export default Main;