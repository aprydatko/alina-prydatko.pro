import React from "react"
import ReactGA from 'react-ga';

ReactGA.initialize('UA-136796685-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Header = ({ children}) => (
    <header>
        {children}
    </header>
)

export default Header
