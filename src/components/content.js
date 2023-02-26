import BookNames from './bookNames';
import Analytics from './analytics';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import React, {Component} from 'react';
  import  { useState } from "react";
  import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import Logo from '../assets/Logo.png'


  export default function Content() {
// class Content extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //       shortName: "empty",
//     //     };
//     //   }
    const [shortName, setName] = useState('hello');
    const [shortName2, setName2] = useState('hello');
    const [data11, setData11] = useState('hello');
    const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
            <Navbar className="navbar" light expand="md">
                <NavbarBrand href="/"><img src={Logo} width="500px" /></NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Search By Author</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Search By Book</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <BrowserRouter>
            <div>
            <Routes>
                <Route  path="/" element={<BookNames shortName45={shortName} setName={setName}/>}/>
                <Route path={shortName} element={<Analytics setDatas={setData11} data11={data11} shortName45={shortName} shortName22={shortName2} setName2={setName2}/>}/>
            </Routes>
            </div>
        </BrowserRouter>
        </>
        );
      }

