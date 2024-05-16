import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, ListGroup, Col} from 'react-bootstrap';

const items = [
  {id:1, name:"임세현"},
  {id:2, name:"최경서"},
  {id:3, name:"박진아"}
];

function App() {
  return (
    <Container>
      <Row>
        <Col sm={6} xs={12}>
        <h1>Users</h1>
        <ListGroup defaultActiveKey="#link1">
          {items.map(item=>(
            <ListGroup.Item action key={item.id}>
              {item.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
        </Col>
        <Col sm={6} xs={12}>
        <h1>Stocks</h1>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
