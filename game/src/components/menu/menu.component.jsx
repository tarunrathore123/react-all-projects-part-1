import React from 'react';
import {MenuItems} from './menuitems.component';
import './menu.styles.scss';
import {Button} from '../button/button';


class Menu extends React.Component{

    state={ clicked: false };

    handleClick=()=>{
        this.setState({clicked:!this.state.clicked});
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
                        );
                    })}                    
                </ul>
                <Button>Sign Up</Button>
            </nav>
        );
    }
}

export default Menu;