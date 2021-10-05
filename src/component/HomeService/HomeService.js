import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Home from '../Home/Home';
import './HomeService.css'

const HomeService = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
  fetch('./gym.json').then(res=>res.json()).then(data=>setServices(data));
  
  
    },[])
    return (
        <div>
          <div className="intro">

          <div>

          </div>

          <div >
            <h3 className="fade-in-left">Sore? Out of breath? Tired?…Good, it’s working, you are almost there!</h3>
            
            <h3>Welcome to the best gym of the city</h3>
            <p>Facilities: Treadmills, Rowers, stationary bikes, cross trainers, versa climbers (step machines), steppers, and rowing machines.Resistance training equipment including:Fixed weight machines, dumbbells, barbells and weight plates. Also clean toilets, changing and shower rooms and exercise mats, stability balls and space to exercise.</p>
            <Button>Get Started</Button>
            
          </div>


          </div>

            
     <Row xs={1} md={3} className="g-4">
    {
     
       services.slice(0,4).map(service=><Home key={service.name} service={service}></Home>)
     
    
     }
  </Row>
  
        </div>
    );
};

export default HomeService;