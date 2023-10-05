import React from 'react';
import './App.css';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';


function App() {
  const [stations, setStations] = useState([
    {name:'USA'},
    {name:'Canada'},
    {name:'India'},
    {name:'Bangladesh'}
  ]);
  const [current, setCurrent] = useState(null);
  const [text,setText]=useState('');
  const {speak}=useSpeechSynthesis();
  const handleClick=()=>{
    speak({text:text})
  }

  const handleStationSelect = (selectedStation) => {
    setCurrent(selectedStation);
  };

  return (
    <div>
      <div className="nav">
        <div className="nav-item"></div>
        <div className="nav-item">Stream</div>
        <div className="nav-item"></div>
      </div>
      <ul className="station-list">
        {stations.map((station, key) => (
          <Station
            key={key}
            station={station}
            current={current}
            onStationSelect={handleStationSelect}
          />
        ))}
      </ul>
      <div className="station-info">
        <div className="header">{current ? 'CURRENTLY PLAYING' : ''}</div>
        <div className="header-name">{current ? current.name : ''}</div>
      </div>
      <input type='text' onChange={(e)=>{setText(e.target.value)}}/>
      <button onClick={()=>handleClick()} >Speak</button>
    </div>
  );
}

function Station(props) {
  const { station, onStationSelect, current } = props;

  return (
    <div className="station" onClick={() => onStationSelect(station)}>
      {station === current ? <StationDetails /> : ''}
      <span className="station-name">{station.name}</span>
      <span className="station-number">{station.number}</span>
    </div>
  );
}

function StationDetails(props) {
  return (
    <div className="station-details">
      <div className="station-details-item"></div>
      <div className="station-details-item"></div>
      <div className="station-details-item"></div>
    </div>
  );
}



export default App;