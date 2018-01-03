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
import Person from './person';
import MagnifyingGlass from './magnifyingGlass';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    //app state
    this.state = {
      products: [],
      showMagnifyingGlass: true
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentWillMount() {
    this.fetchProducts();
    window.addEventListener('click', function(e){
      if (e.target.id === 'searchInput') {
        this.setState({showMagnifyingGlass: false});
      } else if (!this.state.showMagnifyingGlass){
        this.setState({showMagnifyingGlass: true});
      }
    }.bind(this))
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
              <NavLink className = 'shoe-navlink' href="#" style = {{fontFamily: "'Apercu-Bold', sans-serif"}}>Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = 'shoe-navlink' href="#">Top Sellers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = 'shoe-navlink' href="#">Upcoming</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = 'shoe-navlink' href="#">Size Guide</NavLink>
            </NavItem>
            <div className = 'shoe-navbar-line'></div>
            <NavItem>
              <NavLink href="#">
                <UncontrolledDropdown>
                  <DropdownToggle nav = {true} style = {{backgroundColor: '#ffffff', border: 'none'}}>
                    <Person classProp = 'shoe-person'/>
                  </DropdownToggle>
                  <DropdownMenu style = {{marginRight: 50}}>
                    <DropdownItem onClick = {()=>{window.location.href = 'seller.html'}}>Seller Dashboard</DropdownItem>
                    <DropdownItem>Interest List</DropdownItem>
                    <DropdownItem>Edit Profile</DropdownItem>
                    <DropdownItem>Sign Out</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className = 'container-fluid search-div'>
          <div style = {{width: '60%', marginLeft: '20%', marginTop: '40px', lineHeight: '40px',
              verticalAlign: 'middle', boxShadow: '0 2px 1.0px 0 rgba(0, 0, 0, 0.1)'}}>
          <InputGroup>
            {this.state.showMagnifyingGlass?
              <MagnifyingGlass classProp = 'shoe-magnifying-glass'/>
              :null}
            <Input id = 'searchInput' type = "search" style = {{border: 'solid 0.5px #b9b9b9', borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px'}}>
            </Input>
            <InputGroupAddon style = {{border: 'solid 0.5px #b9b9b9',
            borderTopRightRadius: '3px', borderBottomRightRadius: '3px',
            cursor: 'pointer'}}>
            <span style = {{paddingLeft: '10px', paddingRight: '10px'}}>Add Filters</span>
            </InputGroupAddon>
          </InputGroup>
          </div>
        </div>
        <div style = {{marginTop: 50, marginLeft: '10%', width: '80%'}}>
          <CardColumns>
            {this.state.products.map((product)=>{
              return (<div className = 'col-xs-4' key = {Math.random()}>
              <Card style = {{height: 300, marginBottom: 30, border: 'none', borderRadius: '0px'}}>
                <span className = 'shoe-price'>
                  $260
                </span>
                <CardImg top width = '100%' style = {{maxHeight: 200}} src={product.images[0] && product.images[0].src? product.images[0].src: 'https://cdn.shopify.com/s/files/1/2659/3394/products/Screen_Shot_2018-01-02_at_10.40.50_AM.png?v=1514907765'} alt="Card image cap" />
                <CardBody className = 'shoe-card-bottom'>
                  <CardTitle style = {{fontSize: '18px'}}>{product.title}
                  <br/>
                  </CardTitle>
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
