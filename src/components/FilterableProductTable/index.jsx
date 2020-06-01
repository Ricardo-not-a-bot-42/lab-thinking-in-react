import React, { Component } from 'react';
import SearchBar from './../SearchBar';
import ProductTable from './../ProductTable';
import './index.css';

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data.data;
    this.state = {
      products: this.data,
      onlyStocked: false,
      searchValue: '',
    };
  }

  updateSearch = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.checkProducts(value, this.state.onlyStocked);
  };

  onStock = (event) => {
    this.setState({
      onlyStocked: event.target.checked,
    });
    this.checkProducts(this.state.searchValue, event.target.checked);
  };

  checkProducts = (value, stocked) => {
    let filteredProducts = this.data.filter((product) => {
      return product.name.toLowerCase().includes(value);
    });
    if (stocked) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.stocked;
      });
    }
    this.setState({
      products: filteredProducts,
      searchValue: value,
    });
  };

  render() {
    return (
      <div className="container">
        <SearchBar
          search={this.state.searchValue}
          updateMethod={this.updateSearch}
          onStockChange={this.onStock}
        />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
