import { ReactNode } from "react"
import { CustomNavLink } from "./styles"

interface NavBarLinkProps{
    to: string
    children?: ReactNode
}

export function NavBarLink({ to, children }: NavBarLinkProps){
    return (
        <CustomNavLink to={to}>
            {!!children && children}
        </CustomNavLink>
    )
}