import React from 'react';
import './card-list.styles.scss';
import Card from '../card/card.component';


const CardList = (props)=>{
    return (
        <div className='row'>
            {props.games.map(game=>(
            <Card key={game.id} game={game}></Card>
          ))}
        </div>
    );
} 


export default CardList;

