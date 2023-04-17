import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
import { UserContext } from "./App";

function Header({ handleChange, search, setSearch }) {
  const [fishData] = useContext(UserContext);
  //   const [search, setSearch] = useState("");

  // let filteredFish = fishData.filter(fish => fish.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <HeaderContainer>
      <div className="sale-div">
        <NavbarContainer>
          <div >
            <h1 className="sale">Want to sell a fish?</h1>
          </div>
          <NavbarList>
            <NavbarItem>
              {/* <NavLink to="/">Home</NavLink> */}
            </NavbarItem>
          </NavbarList>
        </NavbarContainer>
        {/* <Search onChange={handleChange} search={search} setSearch={setSearch} /> */}
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0;
  margin: 0;
`;

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

const NavbarLink = styled.a`
  font-family: "Times New Roman", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #ff0000; /* Change the font color on hover */
  }
`;
