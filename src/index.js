import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [error, setError] = useState('');

  window.navigator.geolocation.getCurrentPosition(
    (position) => position && position.coords && setLat(position.coords.latitude),
    (error) => error && setError(error.message)
  );

  if (!lat && error) {
    return <div className="season-app">
      An error occured with message: {error}
    </div>;
  }
  if (lat && !error) {
    return <SeasonDisplay lat={lat}></SeasonDisplay>;
  }
  return <Spinner message="Allow or block location service in the browser."/>;
};
ReactDOM.render(<App />, document.querySelector('#root'));