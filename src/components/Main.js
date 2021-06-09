import React from 'react';
// import horneddata from '../data/horneddata.json';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';
import FormSelect from './FormSelect';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            SelectedBeast:this.props.horneddata
        }
    }

//  🤯🤯🤯🤯 filterring function
    renderBasedOnSelectValue=(selectValue)=>{
        console.log(typeof selectValue);//{1 2 3 100.def}
        let SelectedBeastFilterArr=[];
        if(selectValue!=='default'){
            SelectedBeastFilterArr= this.props.horneddata.filter(element=>{
                if(element.horns===parseInt(selectValue)){
                    return element;
                }
            })
        }else{
            SelectedBeastFilterArr= this.props.horneddata; 
        }
        this.setState({
            SelectedBeast:SelectedBeastFilterArr
        })
    }

    render() {
        return (
        <div>
            {/* CALL FORM */}
            <FormSelect
                renderBasedOnSelectValue={this.renderBasedOnSelectValue}
            />

            {/* RENDER SELECTED BEASTS */}
            <CardGroup className="container">
                {this.state.SelectedBeast.map((item,index)=>
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