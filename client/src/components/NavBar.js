import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/">Fish Haven</Link>
        {/* <p className="slogan">Dive into the world of fish trading</p> */}
      </Logo>
      <Nav>
      <Button className="btn">Call To Action</Button>
        {/* <Button as={Link} to="/new">
          Add fish
        </Button> */}
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0 106px;
  background-color:#33cccc;
`;


const Logo = styled.h1`
  font-family: "Lato";
  font-size: 3rem;
  color: white;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;


export default NavBar;
