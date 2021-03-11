import './App.css';
import React, {useEffect, useState} from "react";
import ContentCard from './Components/ContentCard';
import { Container, Row, Col, Card, Button, Navbar} from 'react-bootstrap';


function App() {

  function addWentWell() {
    setCardListPositive(cardListPositive.concat(<ContentCard text={positiveText}></ContentCard>));
    setPositiveText("");
    console.log(cardListPositive);
  }

  function addImprove(){
    setCardListImprove(cardListImprove.concat(<ContentCard text={improveText}></ContentCard>));
    setImproveText("");
    console.log(cardListImprove);
  }


  function addActionItem(){
    setCardListAction(cardListAction.concat(<ContentCard text={actionText}></ContentCard>));
    setActionText("");
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
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img
            alt=""
            src="images/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        HIG Retro Board
        </Navbar.Brand>

        </Navbar>
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
                <Col>
                  <textarea value={positiveText} onChange={handleWentWellText} />
                </Col>
                <Button class="btn btn-secondary btn-lg btn-block" onClick={addWentWell} style={{ marginBottom: '5px' }}>Add Item</Button>

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
                <Col>
                  <textarea value={improveText} onChange={handleImproveText} />
                </Col>
                <Button class="btn btn-secondary btn-lg btn-block" onClick={addImprove} style={{ marginBottom: '5px' }}>Add Item</Button>

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
                <Col>
                  <textarea value={actionText} onChange={handleActionText} />
                </Col>
                <Button class="btn btn-secondary btn-lg btn-block" onClick={addActionItem} style={{ marginBottom: '5px' }}>Add Item</Button>

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
