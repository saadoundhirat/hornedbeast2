import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { Row, Col, CardGroup} from 'react-bootstrap';


class HornedBeast extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            likesCounter: 0
        }
    }

   likesCounter = ()=>{
       this.setState({
           likesCounter: this.state.likesCounter+1
       })
   }

   
    render() {
        return (
            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.imgUrl}  onClick={this.likesCounter}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>Number Of Likes 💟{this.state.likesCounter}💟</Card.Text>
                <Card.Text>{this.props.description}</Card.Text>
                <Card.Text>Number Of Horns💥{this.props.horns}💥</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
        )
    }
}

export default HornedBeast;