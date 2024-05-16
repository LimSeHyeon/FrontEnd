import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, ListGroup, Col, Modal, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {getPosts} from './apis/post';

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

  //https://jsonplaceholder.typicode.com/posts
  // useEffect(()=> {
  //   fetch('https://jsonplaceholder.typicode.com/posts').then(resp=>{
  //     return resp.json();
  //   }).then(data=>{
  //     console.log(data);
  //   })
  // })

  // axios.get('https://jsonplaceholder.typicode.com/posts').then(resp=>{
  //   console.log(resp.data);
  // })

  // 1. getPosts 함수를 호출하고 state에 저장 => Rendering
  getPosts().then(data=>{
    console.log(data);
  });
  // 2. 수정요청시 state 수정 및 putPosts 함수 호출
  
  // 3. 삭제요청 시 state 수정 및 deletePosts 함수 호출
  // 4. 삭제요청 시 state 수정 및 deletePosts 함수 호출
  /*
  userid id title body
  */
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
