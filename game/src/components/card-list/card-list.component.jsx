import React from 'react';
import './card-list.styles.scss';
import Card from '../card/card.component';

const CardList = (props)=>{
    return (
        <div className='row'>
            {props.monsters.map(monster=>(
            <Card key={monster.id} monster={monster}></Card>
          ))}
        </div>
    );
} 

export default CardList;