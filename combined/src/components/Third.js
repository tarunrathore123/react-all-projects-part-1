import React, { useState, useEffect } from 'react';
import SeasonDisplay from './third/SeasonDisplay';
import Spinner from './third/Spinner';

const Third = () => {
  const [lat,setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=> {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  });
  console.log(lat,errorMessage);

  const renderContent = () => {
    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

    return <div className="border red"><SeasonDisplay lat={lat}/></div>;
  
}

export default Third;