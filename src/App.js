
import React, { useState } from 'react';
import './App.css';

import backGround from"./background-brown-vintage-royalty-free-.png"
import statue from "./patination-removebg-preview.png"

// import {row, col} from "bootstrap"
import { Row, Col} from "react-bootstrap";



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Row >
   <Col lg={2}>
    <div  className="header">
    
        <button className="toggle-btn" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>


        <div className='text-pg'  style={{}}>
  <h3 style={{flexWrap: 'wrap-reverse'}}> MAITREYA BUDDHA</h3>
  <h3>IN GESTRE OF</h3>
  <h3>FEARLESSNESS</h3>
  <h3>(ABHAYA MUDRA)</h3>

  <img src=""/>
  <img src=""/>
  <img src=""/>


  <p> Dynasty:Ahichchhatra</p>
  <p> Period: 200CE</p>
  <p> Material:Sandstone</p>
  <p> Location: National Museum</p>





    <h4>Description</h4>
    <p> maitreya , the
    </p>
  </div>
      
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
     <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        
      </div>
    
      
</div> 
      
  


{/*          
<div className='text-pg'  style={{marginTop:70}}>
  <h3>ndckfvfvjogitdb dnvkhgckljgibpupbp9kgboprbvjrug0tuu

  </h3>
</div>
    </div>
   <header className="header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
     <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        
      </div>
      </header>


         
<div className='text-pg'  style={{marginTop:70}}>
  <h3>ndckfvfvjogitdb dnvkhgckljgibpupbp9kgboprbvjrug0tuu

  </h3>
</div> */}
      {/* <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
     <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        
      </div> */}






   </Col>

      

       

<Col  lg={4}>

<div className="main-content">
        <div className="image-container">
          <img src={backGround} alt="Grey Background" className="grey-bg"    />
          <img src={statue} alt="Statue" className="statue" />
        </div>
      </div>
 

</Col>

      
    </Row> 
    </div>
  );
}

export default App;


