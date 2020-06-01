import React, { Component } from 'react';

function ProductRow(props) {
  let style;
  if (props.stocked) {
    style = 'green';
  } else {
    style = 'red';
  }
  return (
    <tr style={{ backgroundColor: style }} className="product-row">
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
