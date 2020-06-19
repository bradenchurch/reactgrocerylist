import React from "react";
import { Button, Table } from 'semantic-ui-react'
import Item from './Item';

const Items = ({ items }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item</Table.HeaderCell>
        <Table.HeaderCell>Price($)</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        items.map( i => (
          <Item
          key={i.id}
          {...i}
          />
        ))
      }
      
    </Table.Body>
  </Table>
);
        

export default Items;