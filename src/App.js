import React, { Component } from 'react';
import './App.css';
import { Container, Header, Button, Icon } from "semantic-ui-react"; 
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
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addItem = (incomingItem) => {
    const { items } = this.state
    const newItem = { id: this.getId(), ...incomingItem }
    this.setState({ items: [ newItem, ...items ]})
  }

  deleteItem = (id) => {
    const items = this.state.items.filter( item => {
      if (item.id !== id) {
        return item
      }
    })
    this.setState({ items: [...items] });
  }

  updateItem = (id, updatedItem) => {
    const { items } = this.state;
    this.setState({
      items: items.map( i => {
        if (i.id === id) {
          return { ...updatedItem }
        }
        return i
      })
    })
  }

  render() {
    const { showForm } = this.state;
    return(
      <div>
        <div>
        <Container>
          <Header as="h1" textAlign='center'>React Grocery List</Header>
          <Items items={this.state.items} 
            deleteItem={this.deleteItem} 
            updateItem={this.updateItem} 
          />
        </Container>
        </div>
        { <Button icon color='blue' onClick={this.toggleForm}>
            <Icon name={ showForm ? 'angle up': 'angle down'} />
          </Button> }
          { 
            showForm ?
            <ItemForm addItem={this.addItem} />
            :
            null
          }
      </div>

    )
  }
}



export default App;
