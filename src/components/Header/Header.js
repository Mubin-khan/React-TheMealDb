import React from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = (props) => {
    // console.log(props)
    return (
        <div style={{marginBottom:"20px"}}>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">FoodBar</Navbar.Brand>
                
                <Form className="d-flex">
               
                <FormControl  
                    onChange={props.searchResult} 
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success" disabled>Search</Button>
                </Form>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;