import React from 'react'
import './style.css'

import { ReactComponent as Facebook } from "../../images/icons/social/facebook.svg"
import { ReactComponent as Twitter } from "../../images/icons/social/twitter.svg"
import { ReactComponent as GooglePlus } from "../../images/icons/social/googleplus.svg"
import { ReactComponent as Linkendin } from "../../images/icons/social/linkedin.svg"

const Wrapper = ({ children }) => (
    <div className="social">
        {children}
    </div>
)

const Link = ({ children, src }) => (
    <a href={src} className="social__link">
        {children}
    </a>
)

const Social = () => (
    <Wrapper>
        <Link src="http://facebook.com/">
            <Facebook className="social__img" />
        </Link>
        <Link src="http://twitter.com/">
            <Twitter className="social__img" />
        </Link>
        <Link src="http://googleplus.com/">
            <GooglePlus className="social__img" />
        </Link>
        <Link src="http://linkendin.com/">
            <Linkendin className="social__img" />
        </Link>
    </Wrapper>
)

export default Social