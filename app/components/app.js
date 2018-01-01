import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
InputGroup, InputGroupAddon, Input,
Card, CardImg, CardBody, CardColumns,
  CardTitle} from 'reactstrap';
import Person from 'react-open-iconic-svg/dist/Person';

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
    return(
      <div>
        <Navbar light expand="md" className = 'shoe-navbar'>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Top Sellers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Upcoming</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Size Guide</NavLink>
            </NavItem>
            <div className = 'shoe-navbar-line'></div>
            <NavItem>
              <NavLink href="#">
                <Person style = {{width: 25, height: 25}}/>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className = 'container-fluid search-div'>
          <div style = {{width: '60%', marginLeft: '20%', marginTop: '40px', lineHeight: '40px',
              verticalAlign: 'middle', border: 'solid 0.5px #b9b9b9'}}>
          <InputGroup>
            <Input type = "search" placeholder="search" style = {{boxShadow: '0 1px 0.5px 0 rgba(0, 0, 0, 0.1)'}}/>
            <InputGroupAddon style = {{border: 'solid 0.5px #b9b9b9',
            borderTopRightRadius: '5px', borderBottomRightRadius: '5px',
            boxShadow: '0 1px 0.5px 0 rgba(0, 0, 0, 0.1)'}}>
            {'  Add Filters  '}
            </InputGroupAddon>
          </InputGroup>
          </div>
        </div>
        <div style = {{marginTop: 50, marginLeft: '10%', width: '80%'}}>
          <CardColumns>
            {this.state.products.map((product)=>{
              return (<div className = 'col-xs-4' key = {Math.random()}>
              <Card style = {{height: 300, marginBottom: 30}}>
                <CardImg top width = '100%' style = {{height: 200}} src={product.images[0] && product.images[0].src? product.images[0].src: 'https://images.nike.com/is/image/DotCom/PDP_HERO/849558_100_A_PREM/air-vapormax-flyknit-mens-running-shoe-BjAw8V.jpg'} alt="Card image cap" />
                <CardBody className = 'shoe-card-bottom'>
                  <CardTitle style = {{fontSize: '18px'}}>{product.title}</CardTitle>
                </CardBody>
              </Card>
              </div>);
            })}
          </CardColumns>
        </div>
    </div>);
  }
}

export default App;
