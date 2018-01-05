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


class Seller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMagnifyingGlass: true
    };
  }

  componentWillMount() {
    window.addEventListener('click', function(e){
      if (e.target.id === 'searchInput') {
        this.setState({showMagnifyingGlass: false});
      } else if (!this.state.showMagnifyingGlass){
        this.setState({showMagnifyingGlass: true});
      }
    }.bind(this))
  }

  render() {
    return(
      <div>
        <Navbar light expand="md" className = 'shoe-navbar' style = {{borderBottom: 'solid 1px #d0d0d0'}}>
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
        <div className = 'row'>
          <div className = 'col-2' style = {{backgroundColor: '#ffffff'}}>
            <nav>
              <div style = {{marginLeft: 40, marginTop: 100, fontSize: 18}}>
                <div className = 'shoe-left-nav-item-div'><a className = 'shoe-left-nav-item'>FIND BUYERS</a></div>
                <div className = 'shoe-left-nav-item-div'><a className = 'shoe-left-nav-item'>INBOX</a></div>
                <div className = 'shoe-left-nav-item-div'><a className = 'shoe-left-nav-item'>INVENTORY</a></div>
                <div className = 'shoe-left-nav-item-div'><a className = 'shoe-left-nav-item'>SETTINGS</a></div>
              </div>
            </nav>
          </div>
          <div className = 'col-10' style = {{padding: 0, marginTop: 0, backgroundColor: '#fcfcfc', border: 'none', borderLeft: 'solid 0.5px #d0d0d0'}}>
            <div className = 'search-div' style = {{border: 'none', borderBottom: 'solid 0.5px #d0d0d0'}}>
              <div style = {{position: 'absolute', width: '60%', marginLeft: '20%', marginRight: '20%', marginTop: '40px', lineHeight: '40px',
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
                    <span style = {{paddingLeft: '10px', paddingRight: '10px'}}>Edit Filters</span>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
            <div className = 'container' style = {{marginTop: 50, height: 'calc(100% - 120px)'}}>
              <CardColumns style = {{marginLeft: 50}}>
                <div className = 'col-xs-4'>
                  <Card className = 'shoe-user-card'>
                    <div>
                      <img src = 'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png' style = {{width: 50, height: 50, borderRadius: 100, marginBottom: 20, marginTop: 50, border: '0.1px solid black'}}/>
                      <CardTitle style = {{fontSize: '18px'}}>Tyler Henke
                        <br/>
                        <span style = {{color: '#eec124'}}>
                          Indiana
                        </span>
                      </CardTitle>
                    </div>
                  </Card>
                </div>
                <div className = 'col-xs-4'>
                  <Card className = 'shoe-user-card'>
                    <div>
                      <img src = 'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png' style = {{width: 50, height: 50, borderRadius: 100, marginBottom: 20, marginTop: 50, border: '0.1px solid black'}}/>
                      <CardTitle style = {{fontSize: '18px'}}>Tyler Mason
                        <br/>
                        <span style = {{color: '#eec124'}}>
                          Indiana
                        </span>
                      </CardTitle>
                    </div>
                  </Card>
                </div>
                <div className = 'col-xs-4'></div>
              </CardColumns>
            </div>
          </div>
        </div>
    </div>);
  }
}

export default Seller;
