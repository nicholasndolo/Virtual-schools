import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Educators from './Educators';
import Students from './Students';
import Schools from './Schools';
// import Logout  from './Logout';
import CreateStudent from './Createstudents';
import CreateEducator from './CreateEducators';
import CreateSchool from './Createschools';
import UpdateStudent from './Updatestudents';
import Deletestudents from './Deletestudents'
import UpdateEducator from './UpdateEducators';
import UpdateSchool from './Updateschools';
import DeleteEductors from './Deleteeductors';
import DeleteSchools from './Deleteschools';
import Logout from './Logout';


export default class NavbarComp extends Component {
    render() {
        return (
            <div>
            {/* // <Router> */}
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">E-Masomo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/educators">Educators</Nav.Link>
                                <Nav.Link as={Link} to="/students">Students</Nav.Link>
                                <Nav.Link as={Link} to="/schools">Schools</Nav.Link>
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                
                {/* <div>
                    <Routes>
                        <Route path="/educators">
                            <Educators />
                        </Route>

                        <Route path="/create">
                            <CreateEducator />
                        </Route>

                        <Route path="/update">
                            <UpdateEducator />
                        </Route>

                        <Route path="/delete">
                            <DeleteEductors />
                        </Route>
                       
                        <Route path="/students">
                            <Students/>
                        </Route>

                        <Route path="/create">
                            <CreateStudent />
                        </Route>

                        <Route path="/update">
                            <UpdateStudent />
                        </Route>

                        <Route path="/delete">
                            <Deletestudents />
                         </Route> 

                       <Route path="/schools">
                            <Schools />
                        </Route>

                        <Route path="/create">
                            <CreateSchool />
                        </Route>

                        <Route path="/update">
                            <UpdateSchool />
                        </Route>

                        <Route path="/delete">
                            <DeleteSchools />
                        </Route>

                        <Route path="/logout">
                            <Logout/>
                        </Route>

                    </Routes>
                </div> */}
    
            {/* // </Router> */}
            </div>
        )
    }
}
