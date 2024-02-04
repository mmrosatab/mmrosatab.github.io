import { Link } from "react-router-dom"
import { NavBarContainer, UnorderedList, ListItem } from "./styles"

export function NavBar(): JSX.Element{
    return (
        <NavBarContainer>
            <div style={{backgroundColor: 'white'}}>LOGO</div>
            <UnorderedList>
                <ListItem><Link to='/'>Home</Link></ListItem>
                <ListItem><Link to='/'>Portifolio</Link></ListItem>
                <ListItem><Link to='/'>Currículum</Link></ListItem>
                <ListItem><Link to='/Contact'>Contact</Link></ListItem>
            </UnorderedList>
        </NavBarContainer>
    )
}