import React from "react";
import {Form} from 'react-bootstrap/';


class FormSelect extends React.Component {
  // 😴😴😴 call the app function (inside main)
  updateFormSelectValue = (event) => {
    event.preventDefault();
    let selectValue = event.target.value;
    this.props.renderBasedOnSelectValue(selectValue);
  };

  // 😴😴😴 call sort object 
  sort = (event) => {
    event.preventDefault();
    let selectValue = event.target.value;
    this.props.handleSort(selectValue);
  };

  

  //render form
  render() {
    return (
      <div>
        <Form>
            <Form.Group>
              <Form.Label>
                Render Based on Number Of Horn
              </Form.Label>
              <Form.Control 
               as="select" 
               custom
               id="disabledSelect" 
               onChange={this.updateFormSelectValue}>
                <option value="default">Display All</option>
                <option value="1">one</option>
                <option value="2">two</option>
                <option value="3">three</option>
                <option value="100">wow</option>
              </Form.Control>
              {/* use the sort method to sort items based on the # of hornS Or A-Z */}
              <Form.Label>
                Sort Horns
              </Form.Label>
              <Form.Control 
               as="select" 
               custom
               id="disabledSelect" 
               onChange={this.sort}>
                <option value="default">Default</option>
                <option value="horns">horn numbers</option>
                <option value="A-Z">from A-Z</option>
              </Form.Control>
              
            </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FormSelect;
