import { Route, Routes as DomRoutes, BrowserRouter,  } from "react-router-dom"
import { Home } from "../view/Home"
import { Contact } from "../view/Contact"
import { NoMatch } from "../view/NoMatch"
import { NavBar } from "../components/NavBar"

export function Routes(){
    return (
        <BrowserRouter>
            <NavBar/>
            <DomRoutes>
                <Route path="/" Component={Home}/>
                {/* <Route path="/portifolio" Component={Contact}/>
                <Route path="/curriculum" Component={Contact}/>
                <Route path="/classes" Component={Contact}/>
                <Route path="/budges" Component={Contact}/> */}
                <Route path="/contact" Component={Contact}/>
                <Route path='*' Component={NoMatch} />
            </DomRoutes>
        </BrowserRouter>
    )
}
