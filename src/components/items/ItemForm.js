import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';


class ItemForm extends React.Component {
  state = { itemName: "", price: "" } ;


handleSubmit = (e) => {
  e.preventDefault();
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, });
}; 

render() {
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input 
          fluid 
          label="Item Name" 
          placeholder="Item Name" 
          name="itemName" 
          value={this.state.itemName} 
          onChange={this.handleChange}
        />
        <Form.Input 
          fluid 
          label="Price" 
          placeholder="Price" 
          name="price" 
          value={this.state.price} 
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form.Group>
    </Form>
  )  
 }
}


export default ItemForm;