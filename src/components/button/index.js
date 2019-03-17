import React from 'react';
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import './style.css'

const Button = ({ title, className, url, type, style }) => (
    <Link to={url} className={className} type={type} style={style}>
        {title}
    </Link>
)

Button.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
}

Button.defaultProps = {
    title: `Смотреть`,
    className: `btn btn-black`,
    url: ``,
    type: ``,
}

export default Button