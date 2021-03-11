import './App.css';
import React, {useEffect, useState} from "react";
import ContentCard from './Components/ContentCard';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';


function App() {

  function addWentWell() {
    setCardListPositive(cardListPositive.concat(<ContentCard text={positiveText}></ContentCard>));
    console.log(cardListPositive);
  }

  function addImprove(){
    setCardListImprove(cardListImprove.concat(<ContentCard text={improveText}></ContentCard>));
    console.log(cardListImprove);
  }


  function addActionItem(){
    setCardListAction(cardListAction.concat(<ContentCard text={actionText}></ContentCard>));
    console.log(cardListAction);
  }

  function handleWentWellText(event){
    setPositiveText(event.target.value);
  }

  function handleImproveText(event){
    setImproveText(event.target.value);
  }

  function handleActionText(event){
    setActionText(event.target.value);
  }

  const [cardListPositive, setCardListPositive] = useState([]);
  const [positiveText, setPositiveText] = useState("");

  const [cardListImprove, setCardListImprove] = useState([]);
  const [improveText, setImproveText] = useState("");

  const [cardListAction, setCardListAction] = useState([]);
  const [actionText, setActionText] = useState("");

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
                <textarea value={positiveText} onChange={handleWentWellText} />
                <Button onClick={addWentWell}>Add Item</Button>

                {cardListPositive}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>Needs Improvement</Card.Title>
                <Card.Text>
                <textarea value={improveText} onChange={handleImproveText} />
                <Button onClick={addImprove}>Add Item</Button>

                {cardListImprove}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>Actionable Items</Card.Title>
                <Card.Text>
                <textarea value={actionText} onChange={handleActionText} />
                <Button onClick={addActionItem}>Add Item</Button>

                {cardListAction}
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
