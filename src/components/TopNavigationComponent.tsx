import MenuList from "page/MenuList";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default (() => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React Template</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {MenuList.map((item:any, idx:number) =>{
                        return(
                            <Nav.Link key={idx} href={item.path}>{item.name}</Nav.Link>
                        );
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
})