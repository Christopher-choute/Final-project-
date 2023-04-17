import React, {useState,useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles";
import Search from "./Search";
import { UserContext } from "./App";
// import { useHistory } from "react-router-dom";
// import {UserContext} from "./UserContext";
// import { NavLink } from 'react-router-dom';


const NavbarContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const NavbarList = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const NavbarItem = styled.li`
    margin-right: 1rem; 
`;

const NavLink = styled.a`
    font-family: "Times New Roman", sans-serif; 
    font-size: 20px; 
    font-weight: bold; 
    color: white; 
    text-decoration: none; 
    
    
    &:hover {
      color: #ff0000; /* Change the font color on hover */
    }
    
`;

function NavBar({ user, setUser,handleChange, search, setSearch }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  const [fishData]=useContext(UserContext)
  // const [search, setSearch] = useState("");

  // let filteredFish = fishData.filter(fish => fish.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Wrapper>
      <Search onChange={handleChange} search={search} setSearch={setSearch} />
      <Logo>
        <Link to="/">Fish Haven</Link>
        {/* <p className="slogan">Dive into the world of fish trading</p> */}
      </Logo>
      <Nav>
        <NavbarContainer>
        <NavbarList>
        <NavbarItem>
          <NavLink exact to = "/">Home</NavLink>
        </NavbarItem>
        {/* Make sure you make a intro page component and swap out the recipe one */}
        <NavbarItem>
          <NavLink to = "/recipes">First time setting up a tank?</NavLink>
        </NavbarItem>
          {/* <Button as={Link} to="/new">
            Add fish
          </Button> */}
          <Button variant="outline" onClick={handleLogoutClick}>
          <i class="sign out alternate icon"></i>
            Logout
          </Button>
          </NavbarList>
        </NavbarContainer>
        {/* <Search search = {search} setSearch = {setSearch} /> */}
      </Nav>
    </Wrapper>

  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
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
  margin-right: 1000px;

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
