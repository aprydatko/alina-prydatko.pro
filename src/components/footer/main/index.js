import React from 'react'
import './style.css'
import Logo from '../../logo'
import background from '../../../images/sity.jpg'

const Header = ({ title }) => (
    <div className="main-footer__title">
        <h6 className="main-footer__h6">{title}</h6>
    </div>
)

const Phone = ({ phone }) => (
    <a className="main-footer__link" 
        href={`tel:${phone}`}>
        {phone}
    </a>
)

const Email = ({ email }) => (
    <a className="main-footer__link" 
        href={`malito:${email}`}>
        {email}
    </a>
)

const Address = ({ address }) => (
    <div className="main-footer__block">
        <div className="main-footer__link">
            {address}
        </div>
    </div>
)

const Item = ({ name, children  }) => (
    <div className="main-footer__block">
        <strong className="main-footer__name">{name}:</strong>
        {children}
    </div>
)

const Container = ({ children }) => (
    <div className="main-footer__item main-footer__logo">
        {children}
    </div>
)

const Wrapper = ({ children }) => (
    <div className="main-footer" 
        style={{ backgroundImage: "url( " + (background) + " )" }}>
        <div className="container">
            <div className="main-footer__wrapper">
                {children}
            </div>
        </div>
    </div>
)

const MainFooter = ({ phone, email, address }) => (
    <Wrapper>
        <Container>
            <Logo />
        </Container>
        <Container>
            <Header title="Позвонить" />
            <Item name="Моб"><Phone phone={phone} /></Item>
        </Container>
        <Container>
            <Header title="Написать" />
            <Item name="Email"><Email email={email} /></Item>
        </Container>
        <Container>
            <Header title="Адресc" />
            <Address address={address} />
        </Container>
    </Wrapper>
)

export default MainFooter