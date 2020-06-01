import React from 'react';
import ProductRow from './ProductRow';
import './index.css';

function ProductTable(props) {
  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => {
            return (
              <ProductRow
                key={Math.random() * 40}
                name={product.name}
                price={product.price}
                stocked={product.stocked}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
