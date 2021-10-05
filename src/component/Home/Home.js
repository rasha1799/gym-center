import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Home = (props) => {

    const {name,image,duration,description,price}=props.service||{}
    return (
        <div >

    <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
           <Card.Title>{name}</Card.Title> 
          <Card.Text>
            {description}
            <p>{duration}</p>
            <h4>Price:$ {price}</h4>
             <Button>Enroll Now</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </div>
           
        </div>
    );
};

export default Home;