import styled from 'styled-components'

interface TootleNavBarProps {
    open: boolean
}

interface IconProps {
    size?: 'small' | 'big'
}

export const NavBarContainer = styled.nav`
    background-color: #1c0b2b;
    width: 100%;
    height: 80px;
    padding: 10px 14px 10px 10px;
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

export const Icon = styled.img<IconProps>`
    ${({ size }) => size === 'small' && `
        width: 20px;
        height: 20px;
    `}

    ${({ size }) => size === 'big' && `
        width: 28px;
        height: 28px;
    `}

    ${({ size }) => size === undefined && `
        width: 100%;
        height: 100%;
    `}
`

export const LogoContainer = styled.div`
    margin: 0px 18px 0px 10px;
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
        top: 80px;
        right: 0;
        display: ${props => props.open ? 'flex' : 'none'};
    }
`

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70px;

    @media screen and (max-width: 700px) {
        align-items: center;
        margin-bottom: 10px;
    }
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

export const MenuButton = styled.button<TootleNavBarProps>`
    width: 36px;
    height: 36px;
    display: ${props => props.open ? 'none' : 'flex'};

    @media screen and (min-width: 701px) {
        display: none;
    }
`

export const CrossButton = styled.button<TootleNavBarProps>`
    width: 20px;
    height: 20px;
    display: ${props => props.open ? 'flex' : 'none'};

    @media screen and (min-width: 701px) {
        display: none;
    }
`