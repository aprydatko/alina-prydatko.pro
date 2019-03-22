import React from "react"
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-136796685-1');
}

const Header = ({ children}) => (
    <header>
        {children}
    </header>
)

export default Header
