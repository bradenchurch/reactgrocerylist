import React from "react";
import { Button, Table } from 'semantic-ui-react';



const Item = ({ id, itemName, price, deleteItem, updateItem }) => (
  <Table.Row>
    <Table.Cell>{itemName}</Table.Cell>
    <Table.Cell>{price}</Table.Cell>
    <Table.Cell>
      <Button color="green" onClick={ () => deleteItem(id) }>
      ✓
      </Button>
    </Table.Cell>
  </Table.Row> 
);

export default Item;