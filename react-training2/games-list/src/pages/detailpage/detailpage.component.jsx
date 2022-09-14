import React, {useState, useEffect} from 'react';
import './detailpage.styles.scss';

// import {useParams} from 'react-router-dom';

const DetailPage=({match})=>{
    useEffect(()=>{
        fetchItem();
        // console.log(match);
    },[]);
    

    const [item, setItem] = useState({});

    const fetchItem = async ()=>{
        const fetchItem =  await fetch(`https://open-api-for-all.herokuapp.com/jobs/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        // console.log(item);
    }
    // let { id } = useParams();
    return(
        <div className="detail">
            <div className="header">
            <img className="banner" src="https://source.unsplash.com/random/1900*1600"/>
            <img className="logo" src={item.logo}></img>
            <div className="box">
                <div className="content">
                    <div className="heading">City</div>
                    <div className="text">{item.city}</div>
                </div>
                <div className="content">
                    <div className="heading">Company</div>
                    <div className="text">{item.company}</div>
                </div>
                <div className="content">
                    <div className="heading">Jobtype</div>
                    <div className="text">{item.jobtype}</div>
                </div>
                <div className="content">
                    <div className="heading">Salary</div>
                    <div className="text">{item.salary}</div>
                </div>
            </div>
            <div className="overview">
                <div className="title">OVERVIEW</div>
                <div className="text" dangerouslySetInnerHTML={{ __html: item.desc }}></div>

            </div>
            </div>
            <div className="logo">  </div>
        
        
        </div>
    );
}

export default DetailPage;