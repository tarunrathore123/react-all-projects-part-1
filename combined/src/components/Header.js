import React from 'react';


const Header = () =>{
    return (
        <div className="ui tabular menu" style={{marginTop:'20px', marginLeft:'20px'}}>
            <a href="/" className="item">Home</a>
            <a href="/first"  className="item">First</a>
            <a href="/second" className="item">Second</a>
            <a href="/third" className="item">Third</a>
            <a href="/fourth" className="item">Fourth</a>
        </div>
    );
}


export default Header;