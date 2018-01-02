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
import MagnifyingGlass from 'react-open-iconic-svg/dist/MagnifyingGlass';

class Seller extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className = 'row'>
          <div className = 'col-12 col-md-3 col-xl-2' style = {{backgroundColor: '#ffffff'}}>
            <nav>
              <div style = {{marginLeft: 40, marginTop: 100, fontSize: 18}}>
                <div className = 'shoe-left-nav-item-div'><a className = 'shoe-left-nav-item'>FIND BUYERS</a></div>
                <div className = 'shoe-left-nav-item-div'><a className = 'shoe-left-nav-item'>INBOX</a></div>
                <div className = 'shoe-left-nav-item-div'><a className = 'shoe-left-nav-item'>INVENTORY</a></div>
                <div className = 'shoe-left-nav-item-div'><a className = 'shoe-left-nav-item'>SETTINGS</a></div>
              </div>
            </nav>
          </div>
          <div className = 'col-12 col-md-9 col-xl-8' style = {{padding: 0, marginTop: 0, backgroundColor: '#fcfcfc', border: 'none', borderLeft: 'solid 0.5px #d0d0d0'}}>
            <div className = 'search-div' style = {{position: 'relative', width: '100%', border: 'none', borderBottom: 'solid 0.5px #d0d0d0'}}>
              <div style = {{position: 'relative', width: '60%', marginLeft: '20%', marginRight: '20%', marginTop: '40px', lineHeight: '40px',
              verticalAlign: 'middle', boxShadow: '0 2px 1.0px 0 rgba(0, 0, 0, 0.1)'}}>
                <InputGroup>
                  <MagnifyingGlass style = {{position: 'absolute', zIndex: 2000, height: 30, width: 30, marginLeft: 10, marginTop: 5}}/>
                  <Input type = "search" style = {{border: 'solid 0.5px #b9b9b9'}}>
                  </Input>
                  <InputGroupAddon style = {{border: 'solid 0.5px #b9b9b9',
                    borderTopRightRadius: '5px', borderBottomRightRadius: '5px',
                    cursor: 'pointer'}}>
                    <span style = {{paddingLeft: '10px', paddingRight: '10px'}}>Edit Filters</span>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
            <div className = 'container-fluid' style = {{marginTop: 50, height: 'calc(100% - 120px)'}}>
              <CardColumns style = {{marginLeft: 50}}>
                <div className = 'col-xs-4'>
                  <Card className = 'shoe-user-card'>
                    <div>
                      <img src = 'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png' style = {{width: 50, height: 50, borderRadius: 100, marginBottom: 20, marginTop: 50, border: '0.1px solid black'}}/>
                      <CardTitle style = {{fontSize: '18px'}}>Tyler Henke
                        <br/>
                        <span style = {{color: 'orange'}}>
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
                        <span style = {{color: 'orange'}}>
                          Indiana
                        </span>
                      </CardTitle>
                    </div>
                  </Card>
                </div>
              </CardColumns>
            </div>
          </div>
        </div>
    </div>);
  }
}

export default Seller;
