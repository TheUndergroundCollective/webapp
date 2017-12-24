import React, { Component } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'asdfasdf4.myshopify.com',
  storefrontAccessToken: '7b5395b3caa6d63d5dbea7d0b593a164'
});

class App extends Component {
  constructor(props) {
    super(props);
    //app state
    this.state = {
      products: []
    };

    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentWillMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    client.product.fetchAll().then((products) => {
      console.log(products);
      this.setState({products:products});
    });
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
