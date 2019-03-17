import React from 'react'
import Instagram from './instagram/index'
import MainFooter from './main/index'
import Copyright from './copyright/index'

const Footer = () => (
    <footer className="footer">
        <Instagram />
        <MainFooter />
        <Copyright />
    </footer>
)

export default Footer