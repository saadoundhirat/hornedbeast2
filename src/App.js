import React from 'react';
import horneddata from "./data/horneddata.json";
import HornedBeast from './components/HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
class App extends React.Component {
  render() {
    return (
      <div>
      <Header/>
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
          {/* <HornedBeast horneddata={horneddata}/> */}
      </CardGroup>
      <Footer/>
      </div>
    )
  }
}




export default App;
