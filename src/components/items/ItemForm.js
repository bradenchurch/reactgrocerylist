import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';


class ItemForm extends Component {
  state = { itemName: "", price: "" }


handleSubmit = (e) => {
  e.preventDefault();
  if (this.props.id) {
    this.props.updateItem( this.props.id, this.state )
  } else {
    // add the contact to the array of obj
    this.props.addItem(this.state)
  }
  // clear out the form
  this.setState({ itemName: '', price: '' })
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, });
}; 

render() {
  return (
    <Container> 
    <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input 
          fluid 
          label="Item Name" 
          placeholder="Item Name" 
          name="itemName" 
          value={this.state.itemName} 
          onChange={this.handleChange}
          required
        />
        <Form.Input 
          fluid 
          label="Price" 
          placeholder="Price" 
          name="price" 
          value={this.state.price} 
          onChange={this.handleChange}
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form.Group>
    </Form>
    </Container>
  )  
 }
}


export default ItemForm;