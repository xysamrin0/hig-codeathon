import './App.css';

import { Container, Row, Col, Card, Button} from 'react-bootstrap';

function App() {

  function addWentWell() {
    numclicked = numclicked+1;
  }

  function addImprove(){
    console.log("test");
  }

  function addActionItem(){
    console.log("test");
  }

  var numclicked = 1;
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
                  <Col>
                  {numclicked}
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
          <Col>
            <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>What went well</Card.Title>
                <Card.Text>
                <Button onClick={addWentWell}>Add Item</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>What can be improved</Card.Title>
                <Card.Text>
                <Button onClick={addImprove}>Add Item</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>Action Items</Card.Title>
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
