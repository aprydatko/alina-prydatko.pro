import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header/index"
import "../typography"

const PageLayout = ({ children }) => (
    <>
        <Header />
        {children}
    </>
)

export default PageLayout
