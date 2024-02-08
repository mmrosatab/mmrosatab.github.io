import styled from "styled-components"

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
`

export const ContainerLogoAndNavBarLinks = styled.div`
    display: flex;
    align-items: center;
`

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70px;
`

export const SocialMediaButton= styled.a<ButtonStyleProps>`
    width: 28px;
    height: 28px;

    background: url(${({$imageSource}) => $imageSource}) no-repeat center center ;
    background-size: cover;
`

export const ContainerSocialMediaAndFlags = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
`