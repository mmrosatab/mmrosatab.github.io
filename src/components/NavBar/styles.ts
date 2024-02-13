import styled from "styled-components"

interface TootleNavBarProps{
    open: boolean
}

interface TootleNavBarButtonsProps extends TootleNavBarProps{
    $imageSource: string
}

interface ButtonStyleProps{
    $imageSource: string
}

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

    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
`

export const ListItem = styled.li`
    padding: 10px;
    position: relative;
`

export const Logo = styled.img`
    width: 50px;
    height: 50px;
`

export const LogoContainer = styled.div`
    margin: 0px 18px 0px 10px;
`

export const FlagButton = styled.button<ButtonStyleProps>`
    width: 24px;
    height: 24px;

    background: url(${({$imageSource}) => $imageSource}) no-repeat center center ;
    background-size: cover;
`

export const FlagsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px;

    @media screen and (max-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        width: 110px;
    }
`

export const NavBarLinksAndButtonsContainer = styled.div<TootleNavBarProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #1c0b2b;
    transition: 0.1s;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        position: absolute;
        top: 100px;
        right: 0;
        display: ${ props => props.open ?  'flex' : 'none' };
    }
`

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70px;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        height: 70px;
        margin-bottom: 10px;
    }
`

export const SocialMediaButton= styled.a<ButtonStyleProps>`
    width: 28px;
    height: 28px;

    background: url(${({$imageSource}) => $imageSource}) no-repeat center center ;
    background-size: cover;
`

export const SocialMediaAndFlagsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const MenuButton = styled.button<TootleNavBarButtonsProps>`
    width: 36px;
    height: 36px;

    background: url(${({$imageSource}) => $imageSource}) no-repeat center center ;
    background-size: cover;

    display: ${ props => props.open ?  'none' : 'flex' };

    @media screen and (min-width: 701px) {
        display: none;
    }
`

export const CrossButton = styled.button<TootleNavBarButtonsProps>`
    width: 20px;
    height: 20px;

    background: url(${({$imageSource}) => $imageSource}) no-repeat center center ;
    background-size: cover;
    display: ${ props => props.open ?  'flex' : 'none' };

    @media screen and (min-width: 701px) {
        display: none;
    }
`