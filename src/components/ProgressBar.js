import React from 'react';

export default function Progress(props) {
    const { bgcolor, completed, name } = props;

    const containerStyles = {
      height: 20,
      width: '50%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 10
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontSize: 15
    }
  
    return (
        <div className='row'>
        <p className='col-3 progress-label'>{name} </p>
      <div style={containerStyles}>
        <div style={fillerStyles} className="progress-bar-animated progress-bar-striped">
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      </div>
    );
}
