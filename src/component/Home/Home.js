import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Home = (props) => {
    const {name,image,duration,description,price}=props.service;
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
            <small>{duration}</small>
            <h4>Price:$ {price}</h4>
            <Button>Enroll Now</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
</Row>
           
        </div>
    );
};

export default Home;