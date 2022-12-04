import React from 'react';
import Axios from 'axios';
import './App.css';
import green from './media/greens.png'
import red from './media/reds.png'

function App() {

  var rff1 = 0;
  var rff2 = 0;
  var rff3 = 0;
  var rff4 = 0;
  var rff5 = 0;
  var rff6 = 0;
  var rff7 = 0;
  var rff8 = 0;
  var rff9 = 0;
  var rff10 = 0;
  var rff11 = 0;
  var rff12 = 0;

  const getRoomData = () => {
    Axios.get('http://localhost:3001/rnd/102').then((response) => {
      console.log(response.data);
      rff1 = response.data.rff1;
      rff2 = response.data.rff2;
      rff3 = response.data.rff3;
      rff4 = response.data.rff4;
      rff5 = response.data.rff5;
      rff6 = response.data.rff6;
      rff7 = response.data.rff7;
      rff8 = response.data.rff8;
      rff9 = response.data.rff9;
      rff10 = response.data.rff10;
      rff11 = response.data.rff11;
      rff12 = response.data.rff12;
      cabin1(rff1);
      cabin2(rff2);
      cabin3(rff3);
      cabin4(rff4);
      cabin5(rff5);
      cabin6(rff6);
      cabin7(rff7);
      cabin8(rff8);
      cabin9(rff9);
      cabin10(rff10);
      cabin11(rff11);
      cabin12(rff12);
    })
  }

  const cabin1 = (state) => {
    if(state === 1) {
      let cabin1_status = document.getElementById('cabin1status');
      cabin1_status.src = green;
      console.log("Human is present - rff1");
    } else {
      let cabin1_status = document.getElementById('cabin1status');
      cabin1_status.src = red;
      console.log("Human is absent - rff1");
    }
  }

  const cabin2 = (state) => {
    if(state === 1) {
      let cabin2_status = document.getElementById('cabin2status');
      cabin2_status.src = green;
      console.log("Human is present - rff2");
    } else {
      let cabin2_status = document.getElementById('cabin2status');
      cabin2_status.src = red;
      console.log("Human is absent - rff2");
    }
  }

  const cabin3 = (state) => {
    if(state === 1) {
      let cabin3_status = document.getElementById('cabin3status');
      cabin3_status.src = green;
      console.log("Human is present - rff3");
    } else {
      let cabin3_status = document.getElementById('cabin3status');
      cabin3_status.src = red;
      console.log("Human is absent - rff3");
    }
  }

  const cabin4 = (state) => {
    if(state === 1) {
      let cabin4_status = document.getElementById('cabin4status');
      cabin4_status.src = green;
      console.log("Human is present - rff4");
    } else {
      let cabin4_status = document.getElementById('cabin4status');
      cabin4_status.src = red;
      console.log("Human is absent - rff4");
    }
  }

  const cabin5 = (state) => {
    if(state === 1) {
      let cabin5_status = document.getElementById('cabin5status');
      cabin5_status.src = green;
      console.log("Human is present - rff5");
    } else {
      let cabin5_status = document.getElementById('cabin5status');
      cabin5_status.src = red;
      console.log("Human is absent - rff5");
    }
  }

  const cabin6 = (state) => {
    if(state === 1) {
      let cabin6_status = document.getElementById('cabin6status');
      cabin6_status.src = green;
      console.log("Human is present - rff6");
    } else {
      let cabin6_status = document.getElementById('cabin6status');
      cabin6_status.src = red;
      console.log("Human is absent - rff6");
    }
  }

  const cabin7 = (state) => {
    if(state === 1) {
      let cabin7_status = document.getElementById('cabin7status');
      cabin7_status.src = green;
      console.log("Human is present - rff7");
    } else {
      let cabin7_status = document.getElementById('cabin7status');
      cabin7_status.src = red;
      console.log("Human is absent - rff7");
    }
  }

  const cabin8 = (state) => {
    if(state === 1) {
      let cabin8_status = document.getElementById('cabin8status');
      cabin8_status.src = green;
      console.log("Human is present - rff8");
    } else {
      let cabin8_status = document.getElementById('cabin8status');
      cabin8_status.src = red;
      console.log("Human is absent - rff8");
    }
  }

  const cabin9 = (state) => {
    if(state === 1) {
      let cabin9_status = document.getElementById('cabin9status');
      cabin9_status.src = green;
      console.log("Human is present - rff9");
    } else {
      let cabin9_status = document.getElementById('cabin9status');
      cabin9_status.src = red;
      console.log("Human is absent - rff9");
    }
  }

  const cabin10 = (state) => {
    if(state === 1) {
      let cabin10_status = document.getElementById('cabin10status');
      cabin10_status.src = green;
      console.log("Human is present - rff10");
    } else {
      let cabin10_status = document.getElementById('cabin10status');
      cabin10_status.src = red;
      console.log("Human is absent - rff10");
    }
  }

  const cabin11 = (state) => {
    if(state === 1) {
      let cabin11_status = document.getElementById('cabin11status');
      cabin11_status.src = green;
      console.log("Human is present - rff11");
    } else {
      let cabin11_status = document.getElementById('cabin11status');
      cabin11_status.src = red;
      console.log("Human is absent - rff11");
    }
  }

  const cabin12 = (state) => {
    if(state === 1) {
      let cabin12_status = document.getElementById('cabin12status');
      cabin12_status.src = green;
      console.log("Human is present - rff12");
    } else {
      let cabin12_status = document.getElementById('cabin12status');
      cabin12_status.src = red;
      console.log("Human is absent - rff12");
    }
  }

  setInterval(getRoomData, 5000);

  return (
    <div className="App">
      <h1>Human Presence Detection</h1>

      <div className='fore'>
        <img src={red} alt= "Error"></img>
        <p>Not-Present &emsp;</p>
        <img src={green} alt= "Error"></img>
        <p>Present</p>
      </div>

      <div className='row'>
        <img src = {red} alt = "Error" id = 'cabin1status'></img>
        <img src = {red} alt = "Error" id = 'cabin2status'></img>
        <img src = {red} alt = "Error" id = 'cabin3status'></img>
      </div>

      <div className='row'>
        <img src = {red} alt = "Error" id = 'cabin4status'></img>
        <img src = {red} alt = "Error" id = 'cabin5status'></img>
        <img src = {red} alt = "Error" id = 'cabin6status'></img>
      </div>
      
      <div className='row'>
        <img src = {red} alt = "Error" id = 'cabin7status'></img>
        <img src = {red} alt = "Error" id = 'cabin8status'></img>
        <img src = {red} alt = "Error" id = 'cabin9status'></img>
      </div>

      <div className='row'>
        <img src = {red} alt = "Error" id = 'cabin10status'></img>
        <img src = {red} alt = "Error" id = 'cabin11status'></img>
        <img src = {red} alt = "Error" id = 'cabin12status'></img>
      </div>
    
    </div>
  );
}

export default App;