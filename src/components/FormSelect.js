import React from "react";
import {Form} from 'react-bootstrap/';


class FormSelect extends React.Component {
  // 😴😴😴 call the app function (inside main)
  updateFormSelectValue = (event) => {
    event.preventDefault();
    let selectValue = event.target.value;
    // console.log(selectValue);
    this.props.renderBasedOnSelectValue(selectValue);
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
            </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FormSelect;
