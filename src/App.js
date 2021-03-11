import './App.css';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';


function App() {

  const addWentWell = (test) =>{
    numclicked = numclicked+1;
  };

  const addImprove = (test) =>{
    console.log("test");
  };
  const addActionItem = (test) =>{
    console.log("test");
  };
  var numclicked = 1;
  return (
    <div className="App">
        <img src="https://s0.hfdstatic.com/sites/higux/dist/images/routing-example-2.svg" class="img-responsive" alt="routing-image2"></img>
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
                <Button onclick={addWentWell}>Add Item</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>What can be improved</Card.Title>
                <Card.Text>
                <Button onclick={addImprove}>Add Item</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>Action Items</Card.Title>
                <Card.Text>
                <Button onclick={addActionItem}>Add Item</Button>
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
