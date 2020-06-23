import React from "react";
import { Button, Table, Checkbox } from 'semantic-ui-react';

const Item = ({ id, itemName, price, deleteItem, updateItem}) => (
  <Table.Row>
    <Table.Cell>{itemName}</Table.Cell>
    <Table.Cell>{price}</Table.Cell>
    <Table.Cell>
      <Checkbox label='' />
    </Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={ () => deleteItem(id) }>
      Remove
      </Button>
      <Button color="green" onClick={ () => updateItem(id) }>
      Update
      </Button>
    </Table.Cell>
  </Table.Row> 
);

export default Item;