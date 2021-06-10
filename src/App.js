import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import horneddata from './data/horneddata.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      horneddata:horneddata,
      selectedHorned:{},
      displayHorned:false
    }
  }

  // 😎😋😋😊 functions
  displayCardAsModel =(clickedHornedTitle) => {
    const selectedHorned = horneddata.find(element=>element.title === clickedHornedTitle)

    // after that get horned object and set display as true if
    this.setState({
      selectedHorned:selectedHorned,
      displayHorned:true
    })
    // console.log(selectedHorned);
  }
  
  // 😎😋😋😊handleClose
  handleClose =()=>{
    this.setState({
      displayHorned:false
    })
  }

  // render data
  render() {
    // console.log(this.state.displayHorned);
    return (
      <div>
          <Header/>

          <Main
          horneddata={this.state.horneddata}
          displayCardAsModel={this.displayCardAsModel}
          />

          <SelectedBeast
          displayHornedObject={this.state.selectedHorned}
          showSelectedHorned={this.state.displayHorned}
          handleClose={this.handleClose}
          // key={this.state.selectedHorned.keyword}
          />

          <Footer/>
      </div>
    )
    // console.log(this.state.displayHorned);
  }
}

export default App;
