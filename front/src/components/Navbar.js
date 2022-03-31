import { FaSearch } from 'react-icons/fa';
import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { mobileResposive } from '../responsive'


const Container = styled.div`
    height: 60px;
    ${mobileResposive({
        height: "30px"
    })}
`

const Spacing = styled.div`
    padding: 0px 40px;
    display: flex;   
    align-items: center;
    justify-content: space-between;
    ${mobileResposive({
        padding: "10px 0px"
    })}
`

const NavLeft = styled.div`
    flex: 1;
    display: flex;    
    align-items: center;    
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer; 
    ${mobileResposive({
        display: "none"
    })}
`

const SearchContainer = styled.div`
border: 0.5px solid lightgray; 
display: flex;    
align-items: center;
margin-left: 25px;
padding: 5px;
${mobileResposive({
    marginLeft: "10px"
})}
`

const Input = styled.input`
    border: none;
    outline: none;
    ${mobileResposive({
        width: "50px"
    })}    
`
const NavMiddle = styled.div`
    flex: 1;
    text-align: center;     
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobileResposive({
        fontSize: "24px"
    })}     
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobileResposive({
        fontSize: "12px",
        marginLeft: "10px"
    })}      
`

const NavRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    ${mobileResposive({
        flex:2,
        justifyContent: "center"
    })}
`


const Navbar = () => {
    return (
        <Container>
            <Spacing>
                <NavLeft>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <FaSearch style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </NavLeft>
                <NavMiddle>
                    <Logo>Codehouse</Logo>
                </NavMiddle>
                <NavRight>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sing in</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                    </MenuItem>
                        
                </NavRight>
            </Spacing>
        </Container>
    )
}

export default Navbar;