import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import './style.css'

// Icons
import { ReactComponent as PhoneIcon } from '../../images/icons/contact/phone.svg'
import { ReactComponent as MailIcon} from '../../images/icons/contact/mail.svg'
import { ReactComponent as PinIcon } from '../../images/icons/contact/pin.svg'

const Contacts = () => (
    <StaticQuery 
        query={graphql`
        {
            allContentfulContact {
              edges {
                node {
                  name
                  content
                }
              }
            }
          }
        `}
        render={({
            allContentfulContact: {
                edges
            }
        }) => (
            edges.map(({ node }, index) => (
                <Item content={node} key={index} />
            ))
        )}
    />
)

const Item = ({
    content: {
        name,
        content
    }
 }) => (
    <div className="contact__item">
        <div className="contact__icon">
            {   name === "Телефон" ? <PhoneIcon /> :
                name === "Почта" ? <MailIcon /> :
                <PinIcon />
            }
        </div>
        <div className="contact__content">
            <h4 className="contact__title">{name}</h4>
            <div className="contact__content-wrapper">
                <div className="contact__text">{content}</div>
            </div>
        </div>
    </div>
)

const Wrapper = ({ children, className }) => (
    <div className={className}>
        {children}
    </div>
)

const Contact = () => (
    <Wrapper className="contact">
        <Contacts />
    </Wrapper>
)

export default Contact