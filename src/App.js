import './App.css';
import React, {useEffect, useState} from "react";
import ContentCard from './Components/ContentCard';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';


function App() {

  function addWentWell() {
    setCardList(cardList.concat(<ContentCard text="test"></ContentCard>));
    console.log(cardList);
  }

  function addImprove(){
    console.log("test");
  }

  function addActionItem(){
    console.log("test");
  }

  const [cardList, setCardList] = useState([]);

  return (
    <div className="App">
       
      <Container>
          <Row>
            <Card>
              <Card.Body>
                <Card.Title>HIG Retro Board</Card.Title>
                <Card.Text>
                  <Col>
                  Team Apex Legends
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
          <Col>
            <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>Positive Outcomes</Card.Title>
                <Card.Text>
                <button class="btn btn-secondary btn-lg btn-block" onClick={addWentWell}>Add Item</button>
                {cardList}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>Needs Improvement</Card.Title>
                <Card.Text>
                <Button onClick={addImprove}>Add Item</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>Actionable Items</Card.Title>
                <Card.Text>
                <Button onClick={addActionItem}>Add Item</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
