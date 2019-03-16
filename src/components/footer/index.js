import React from 'react'

import Instagram from './instagram/index'
import MainFooter from './main/index'
import Copyright from './copyright/index'

import config from '../../../config'

const Footer  = () => (
    <footer className="footer">
        <Instagram />
        <MainFooter 
            phone={config.siteContacts.phone}
            email={config.siteContacts.email}
            address={config.siteContacts.address}/>
        <Copyright site={config.siteCopyright.site} />
    </footer>
)

export default Footer