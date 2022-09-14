import React from 'react';
import {useParams} from 'react-router-dom';

const DetailPage=(props)=>{
    let { id } = useParams();

    
    return(
        <div>
        <div>DetailPage{id}</div>
        <div>
        {props.location.state.name}
        </div>
        </div>
    );
}

// {props.location.state}
export default DetailPage;