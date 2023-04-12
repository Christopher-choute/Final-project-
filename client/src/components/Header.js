import React from "react"
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

function Header() {
    return(
        <HeaderContainer>
            <div className="nav">
                <NavbarContainer>
                <NavbarList>
                <NavbarItem>
                <NavLink to = "/">Home</NavLink>
                </NavbarItem>
                </NavbarList>
                </NavbarContainer>
            </div>
        </HeaderContainer>
            
        )
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