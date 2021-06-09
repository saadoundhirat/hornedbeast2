import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {
    constructor(props) {
        super(props);
        
        console.log('the selected beast is called');
    }

    // 😎😋😋😊handleClose
    handleClose=() => {
      this.props.handleClose();
    }

    render() {
      console.log(this.props.displayHornedObject);
        return(
           
                      <Modal 
                      show={this.props.showSelectedHorned} 
                      size={'md'} 
                      animation={'true'} 
                      onHide={this.handleClose}>
                        
                     <Modal.Header closeButton>
                        <Modal.Title>{this.props.displayHornedObject.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img 
                        src={this.props.displayHornedObject.image_url} 
                        alt={this.props.displayHornedObject.title}/>
                        <br/>
                    </Modal.Body>    
                    <Modal.Body>
                        <p>{this.props.displayHornedObject.description}</p>
                        <br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handelClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                      </Modal>
            )
          }
        }
        
export default SelectedBeast;