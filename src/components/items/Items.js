import React from "react";
import { Table } from 'semantic-ui-react'
import Item from './Item';

const Items = ({ items, deleteItem, updateItem }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item</Table.HeaderCell>
        <Table.HeaderCell>Price ($)</Table.HeaderCell>
        <Table.HeaderCell>Complete</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        items.map( i => (
          <Item
          key={i.id}
          {...i}
          deleteItem={deleteItem}
          updateItem={updateItem} 
          />
        ))
      }
      
    </Table.Body>
  </Table>
);
        

export default Items;