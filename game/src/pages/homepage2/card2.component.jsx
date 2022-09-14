import React from 'react';

import {Route, Link} from 'react-router-dom';
import './card2.styles.scss';

const Card2 = (props) =>{
    return(
        <article>
            <Link to={{  pathname: `/detail/${props.monster.id}`,  state:props.monster}}>
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} style={{maxHeight:'150px'}}/>
            <div>
           <h5 style={{margin:0}}>{props.monster.name}</h5>
           <h2 style={{margin:0, color:'#fff'}}>{props.monster.id}</h2>
           </div>
           </Link>
           </article>
    );
}
export default Card2;