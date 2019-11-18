import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Navbar,
         NavbarBrand,
         NavbarToggler,
         Collapse,
         Nav,
         NavItem,
         NavLink,
         UncontrolledDropdown,
         DropdownMenu,
         DropdownToggle,
         DropdownItem
} from 'reactstrap'
export default class Navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpen:false
        }
    }
    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    } 
    render() {
        return (
            <div>
                <Navbar color="info" light expand="md">
                    <NavbarBrand href="/" >Reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                     <Collapse isOpen={this.state.isOpen}  navbar>
                       <Nav navbar>
                           <NavItem>
                               <NavLink tag={Link} to="/about"> About </NavLink>
                           </NavItem>
                           <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                       </Nav>
                     
                     </Collapse>
                </Navbar>
            </div>
        )
    }
}




