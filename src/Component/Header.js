import React from "react";
import { Navbar, Container } from "react-bootstrap";


function Header(props) {
 

  return (
    <div>
      <Container class="header">
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