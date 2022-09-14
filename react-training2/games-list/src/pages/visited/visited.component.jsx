import React from 'react';
import {connect} from 'react-redux';
import Card from '../../components/card/card.component';


const Visited = ({visitedJobs}) =>{
    return(

        <div className='row'>
            {console.log(visitedJobs)}
            {visitedJobs.map(game=>(
            <Card key={game.id} game={game}></Card>
          ))}
        </div>
        );
}

const mapStateToProps = state =>({
    visitedJobs: state.user.visitedJobs
    
});

export default connect(mapStateToProps)(Visited)

