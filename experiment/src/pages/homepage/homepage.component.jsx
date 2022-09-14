import React from 'react';

import './homepage.styles.scss';
import {Route, Link} from 'react-router-dom';
import {logo} from '../../assets/img/logo-white.png';


 

const HomePage = (props) => {
    
        
        return(
            <div className="header">
                <div className="logo-box">
                    <img src={require('../../assets/img/logo-white.png')} alt="logo" className="logo" />
                </div>
                <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>
                <a href="#" className="btn btn-white btn-animated">Discover More</a>
                </div>
            </div>
        );
};


export default HomePage;