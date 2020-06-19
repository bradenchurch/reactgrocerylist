import React, { Component } from 'react';
import './App.css';
import { Container, Header } from "semantic-ui-react"; 
import Items from './components/items/Items';
import ItemForm from './components/items/ItemForm';

class App extends Component {
  state = {
    items: [
      { id: 1, itemName: "Beans", price: "5" },
      { id: 2, itemName: "Tortillas", price: "3" },
      { id: 3, itemName: "Carne", price: "6" },
    ],
      showForm: true
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm })
  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addItem = (incomingItem) => {
    const { items } = this.state
    const newItem = { id: this.getId(), ...incomingItem }
    this.setState({ items: [ newItem, ...items ]})
  }
  }

  render() {
    const { items, showForm } = this.state
    return (
      <div>
          <Button icon color='blue' onClick={this.toggleForm}>
            <Icon name={ showForm ? 'angle double up': 'angle double down'} />
          </Button>
          { 
            showForm ?
            <ItemForm addItem={this.addItem} />
            :
            null
          }
        </div>
      <Container>
        <Header as="h1">React Grocery List</Header>
        <Items items={this.state.items} />
      </Container>
    );
  }
}



export default App;
