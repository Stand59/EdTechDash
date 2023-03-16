import BookNames from './bookNames';
import Analytics from './analytics';
import Author from './author';
import {useNavigate } from 'react-router-dom';
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
    NavbarBrand,
    Container,
    Row,
    Col,
} from 'reactstrap';
import Logo from './logo.png'
import BookAnalytics from './bookAnalytics';


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


    // const AnalyticsByID = ({setName, shortName}) => {
    //     return (
    //       <BookAnalytics 
    //         // campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
    //         // isLoading={this.props.campsites.isLoading}
    //         // errMess={this.props.campsites.errMess}
    //         // comments={this.props.comments.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
    //         // commentsErrMess={this.props.comments.errMess}
    //         // postComment={this.props.postComment}
    //         setDatas={setData11} data11={data11} shortName45={shortName} shortName22={shortName2} setName2={setName2}
    //       />
    //     );
    // };

        return (
            <>
            <Navbar className="navbar" light expand="md">
                <Container>
                    <Row>
                        <Col sm={3}>
                        <NavbarBrand href="/"><img src={Logo} width="200px" /></NavbarBrand>
                        </Col>
                        <Col>
                            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    {/* <NavItem>
                                        <NavLink href="/">Search By Book</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="author">Search By Author</NavLink>
                                    </NavItem> */}
                                </Nav>
                            </Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <BrowserRouter>
            <div>
            <Routes>
                <Route  path="/" element={<BookNames shortName45={shortName} setName={setName}/>}/>
                {/* <Route path={shortName} element={<Analytics setDatas={setData11} data11={data11} shortName45={shortName} shortName22={shortName2} setName2={setName2}/>}/> */}
                <Route path="author" element={<Author/>}/>
                <Route path="/:shortName" element={<BookAnalytics setDatas={setData11} data11={data11} shortName45={shortName} shortName22={shortName2} setName2={setName2}/>} />
            </Routes>
            </div>
        </BrowserRouter>
        </>
        );
      }

