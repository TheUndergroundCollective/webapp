import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    //app state
    this.state = {
      products: []
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentWillMount() {
    this.fetchProducts();
    //delete a product:
    //products to delete
    fetch('/delete_product?id=667287912490', {headers: {'Content-Type': 'application/json'},
      method: 'DELETE'})
  }

  fetchProducts() {
    fetch('/get_products').then((response) => {
      response.json().then(function(body) {
        console.log(body);
        this.setState({products: body});
      }.bind(this));
    });
  }

  addProduct(product) {
    fetch('/add_product', {headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({
        "product": product
      })
    }).then(res => console.log('new product'));
  }

  deleteProduct(id) {
    fetch('/delete_product?id=' + id, {headers: {'Content-Type': 'application/json'},
      method: 'DELETE'}).then(console.log(productDeleted));
  }

  render() {
    return(<div>
      {this.state.products.map((product)=>{
        return <div key = {Math.random()}>
        {product.images[0]?<img style = {{width: '50px', height: '50px', position: 'absolute'}} src = {product.images[0].src}/>:null}
        <h1 style = {{paddingTop: '10px',  paddingLeft: '60px'}}>{product.title}</h1>
        </div>;
      })}
    </div>);
  }
}

export default App;
