import React from 'react';
import './card-list2.styles.scss';
import Card2 from './card2.component';

const CardList2 = (props)=>{
    return (
        <div className='row'>
            {props.monsters.map(monster=>(
            <Card2 key={monster.id} monster={monster}></Card2>
          ))}
        </div>
    );
} 

export default CardList2;