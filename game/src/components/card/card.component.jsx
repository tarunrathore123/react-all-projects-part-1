import React from 'react';

import {Route, Link} from 'react-router-dom';
import './card.styles.scss';

const Card = (props) =>{
    return(
        <div className='column'>
            <center>
            {/* <Link to={`/detail?id=${props.monster.id}`} > */}
            {/* <Link to={{  pathname: `/detail?id=${props.monster.id}`,  state:props.monster.id }}> */}
            <Link to={{  pathname: `/detail/${props.monster.id}`,  state:props.monster}}>
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} style={{maxHeight:'150px'}}/>
            <div>
           <h5 style={{margin:0}}>{props.monster.name}</h5>
           <h6 style={{margin:0}}>{props.monster.email}</h6>
           </div>
           </Link>
           </center>
        </div>
    );
}
export default Card;