import React from "react";
import { Button, Table } from 'semantic-ui-react';


const Item = ({ itemName, price }) => (
  <Table.Row>
    <Table.Cell>{itemName}</Table.Cell>
    <Table.Cell>{price}</Table.Cell>
    <Table.Cell>
      <Button color="green">
      ✓
      </Button>
    </Table.Cell>
  </Table.Row> 
);

export default Item;