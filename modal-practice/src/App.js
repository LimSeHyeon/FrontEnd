import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, ListGroup, Col, Modal, Button} from 'react-bootstrap';
import React, {useState} from 'react';

const items = [
  {id:1, name:"임세현"},
  {id:2, name:"최경서"},
  {id:3, name:"박진아"}
];

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModealInfo] = useState({});

  const handleClose = e=>{
    setModalShow(false);
  }
  const handleOpen = e=>{
    setModalShow(true);
  }
  
  return (
    <Container>
      <Row>
        <Col sm={6} xs={12}>
        <h1>Users</h1>
        <ListGroup defaultActiveKey="#link1" >
          {items.map(item=>(
            <ListGroup.Item action key={item.id} onClick={e=>{
              setModealInfo(item);
              handleOpen();
            }}>
              {item.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
        </Col>
        <Col sm={6} xs={12}>
        <h1>Stocks</h1>
        </Col>
      </Row>


      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalInfo.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    
  );
}

export default App;
