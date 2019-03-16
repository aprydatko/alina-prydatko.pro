import React from 'react'
import Logo from '../../logo/logo'
import Navigation from '../navigation/index'
import Toggle from '../navigation/toggle/index'
import './style.css'

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false, 
            isNavigationOn: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn,
          isNavigationOn: !state.isNavigationOn,
        }));
    }

    render() {

        const { isToggleOn, isNavigationOn } = this.state;
        const { phone } = this.props;
        return (
            <React.Fragment>
                <Navigation 
                    className={isNavigationOn ? "open" : ""}
                    phone={phone} />
                <Toggle 
                    className={isToggleOn ? "open" : ""} 
                    onClick={this.handleClick} />
            </React.Fragment>
        );
    }
}

const TopMenu = ({ phone }) => (
    <div className="top-menu">
        <div className="container">
            <div className="top-menu__wrapper">
                <Logo />
                <Menu phone={phone} />
            </div>
        </div>
    </div>
)

export default TopMenu