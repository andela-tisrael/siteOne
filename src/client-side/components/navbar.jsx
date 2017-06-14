import React, {Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// What else to add from: https://reactstrap.github.io/components/navbar/

class NavBar extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

toggleDropdown() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });


}

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="/">Academy</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className='button-borders' href="/learn">Learn</NavLink>
              </NavItem>
  {/*            <NavItem>
                <NavLink className='button-borders' href="/categories">Categories</NavLink>
              </NavItem>
*/}
{              // <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} >
              //   <DropdownToggle caret>
              //     Categories
              //   </DropdownToggle>
              //   <DropdownMenu>
              //     <DropdownItem>Finance</DropdownItem>
              //   </DropdownMenu>
              // </Dropdown>
}
              <NavItem>
                <NavLink className='button-borders' href="/shop">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='button-borders' href="/course">Individual Course</NavLink>
              </NavItem>
              {/* <Button  type="submit" color="secondary">Search</Button>{' '} */}
            </Nav>
            <div className="navbar_search_section">
              <FormGroup className="search_field hidden-md-down">
                {/* Adjustable searchbar needed like Udemy*/}
                <Input type="search" name="search" id="SearchBar" placeholder="Search" />
              </FormGroup>
              {' '}
              <Button className="search-button hidden-md-down">
                <i className="fa fa-search"></i>
              </Button>
              <Button className="search-button hidden-lg-up">
                <i className="fa fa-search"></i>
              </Button>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink className='button-borders cart-button' href="/cart"><i className="fa fa-shopping-cart"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='button-borders' href="/userAccount">Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='button-borders' href="/logInSignUp">Log In/Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}
export default NavBar;
// For administrator mode: add a new navbar on top with an edit toggle like reaction commerce when someone signs in as an administrator -> this will need
// a function.

// In footer: Contact and About us

// When not logged in teh home page will showand when
// logged in the shop will be the home page
