import React, { Component } from 'react';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pname: '',
      price: '',
      qty: '',
      total: 0
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  calculateTotal = () => {
    const { price, qty } = this.state;
    const totalPrice = (price) * (qty);
    this.setState({ total: totalPrice });
  };

  render() {
    const { pname, price, qty, total } = this.state;

    return (
      <div>
        <h2>Product Details</h2>
        <fieldset>
        <legend>Enter Product Details</legend>
        <div>
          <label htmlFor="pname">Product Name:</label>
          <input type="text" id="pname" name="pname" value={pname} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value={price} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="qty">Quantity:</label>
          <input type="text" id="qty" name="qty" value={qty} onChange={this.handleChange} />
        </div>
        <button onClick={this.calculateTotal}>Calculate Total</button>
        <div>
          <h3>Total: {total}</h3>
        </div>
        </fieldset>
      </div>
    );
  }
}

export default ProductDetails;
