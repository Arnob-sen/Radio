import React from 'react';
import './App.css';

class  App  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stations: [
      {name:'USA',number:'USA alert'},
      {name:'Canada',number:'Can alert'},
      {name:'India',number:'Ind alert'},
      {name:'Bangladesh',number:'Ban alert'}
      ],
      current: null
    }
  }
  render() {
    const { current, stations } = this.state;
      return (
        <div>
          <div className="nav">
            <div className="nav-item"></div>
            <div className="nav-item">Stream</div>
            <div className="nav-item"></div>
          </div>
          <ul className="station-list">
            {stations.map((station, key) => {
              return <Station
              key={key}
              station={station}
              current={current}
              onStationSelect={ current => this.setState({current}) } />
            })}
          </ul>
          <div className="station-info">
            <div className="header">{current ? 'CURRENTLY PLAYING' : ''}</div>
            <div className="header-name">{current ? current.name : ''}</div>
          </div>
        </div>
      );
  }
}

const Station = (props) => {
    const { station, onStationSelect, current } = props;
    return (
      <div className="station" onClick={() => onStationSelect(station)}>
        { (station === current) ? <StationDetails
        current={current}/> : '' }
        <span className="station-name">{station.name}</span>
        {/* <span className="station-number">{station.number}</span> */}
      </div>
    )
}

const StationDetails = (props) => {
  const{current}=props;
    return (
      <div className="station-details">
        <div className="station-details-item"></div>
        <div className="station-details-item"></div>
        <div className="station-details-item"></div>
      </div>
    )
}
export default App;