import React from "react"
import { Link } from "gatsby"
import './style.css'

import Phone from  "../phone/index"
import Social from "../../social/index"
import Copyright from "../../footer/copyright/index"

import config from "../../../../config"

const Wrapper = ({ children, className }) => (
    <nav className={className}>
        <div className="overlay">
            <div className="menu-wrapper">
                {children}
            </div>
        </div>
    </nav>
)

const Menu = ({ menu }) => (
    <ul className="navigation">
        {menu.map((menu, index) => (
            <li key={index} className="navigation__item">
                <Link  
                    className="navigation__link" 
                    to={menu.url}>
                    {menu.name}
                </Link>
            </li>
        ))}
    </ul>
)

const Navigation = ({ className }) => (
    <Wrapper className={className}>
        <Menu menu={config.siteNavigation.menu} />
        <Phone />
        <Social />
        <Copyright />
    </Wrapper>
)

export default Navigation