import styled from "styled-components"

export const NavBarContainer = styled.nav`
    background-color: #1c0b2b;
    width: 100vw;
    height: 100px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UnorderedList = styled.ul`
    display: flex;
    list-style-type: none;

    a{
        color: #fff;
        text-decoration: none;
    }
`

export const ListItem = styled.li`
    color: #fff;
    padding: 10px;
    cursor: pointer;
`