import './App.css';
import { Container, Row, Col, Card} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
          <Row>
            <Card>
              <Card.Body>
                <Card.Title>HIG Retro Board</Card.Title>
                <Card.Text>
                  Do stuff
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
                  Do stuff
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>What can be improved</Card.Title>
                <Card.Text>
                  Do stuff
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ height: '800px' }}>
              <Card.Body>
                <Card.Title>Action Items</Card.Title>
                <Card.Text>
                  Do stuff
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
