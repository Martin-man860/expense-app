import React from "react";
import { Navbar, Container } from "react-bootstrap";


function Header(props) {
 

  return (
    <div>
      <Container>
      <Navbar bg="danger" variant="dark">
          <Container>
            <Navbar.Brand>Expenses</Navbar.Brand>
          </Container>
        </Navbar>
        <br />

     
        
      </Container>
    </div>
  );
}

export default Header;