import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

export default class Hiro extends Component {
  render() {
    return(
      <div>
        <p>HELLO WORK</p> 
        
        <AFrameRenderer arToolKit={{ sourceType: 'webcam' }} >
          <Marker parameters={{ preset: 'hiro' }}>

            <a-box color="blue" material="opacity: 1;" position="0 0.09 0" scale="0.4 0.8 0.8">
              <a-animation attribute="rotation" to="360 0 0" dur="5000" easing="linear" repeat="indefinite" />
            </a-box>

          </Marker>
        </AFrameRenderer>
       
      </div>
    );
  }
}


 