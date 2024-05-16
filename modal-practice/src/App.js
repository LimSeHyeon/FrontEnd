import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, ListGroup, Col, Modal, Button, Form} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {getPosts, putPosts, postPosts, deletePosts} from './apis/post';

function App() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  useEffect(() =>{
    getPosts().then(data=>{
      setPosts(data);
    })
  },[])
  // useEffect를 async하게 쓰고 싶다면 함수 안에서 만들어 쓸 것
  /*
  useEffect(() =>{
    async function fetchData() {
      const post = await getPosts();
      setPosts(post);
    }
    fetchData();
  }, [])l
  */

  const handleDelete = (postId) => {
    setPosts(posts.filter(post=>post.id !== postId))
    deletePosts(postId).then(data=>{
      if(data.error)setPosts(posts);
    });
  }



  // 1. getPosts 함수를 호출하고 state에 저장 => Rendering
  // 2. 수정요청시 state 수정 및 putPosts 함수 호출  
  // 3. 삭제요청 시 state 수정 및 deletePosts 함수 호출
  // 4. 삭제요청 시 state 수정 및 deletePosts 함수 호출

  return (
    <Container>
      <Row>
        <Col sm={6}>
        <Form onSubmit={(e)=>{
          e.preventDefault();
          postPosts({
            title: formData.title,
            body: formData.body
          }).then(data=>{
            setPosts([...posts, data]);
          })
          console.log(e.target);
        }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={formData.title}
                          placeholder="제목을 입력해주세요."
                          onChange={e=>{
                            setFormData({...formData, title:e.target.value});
                          }}/>
          </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contents</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
          <Button viriant='primary'>작성</Button>
        </Form>
        </Col>
        <Col sm={6}>
        <h1>Posts</h1>
        <ListGroup action>
          {posts.map(post=>(
            <ListGroup.Item action key={post.id} style={{position:"relative"}}>
              <div>
                <h5>{post.title}</h5>
                <div>{post.body}</div>
              </div>
              <span
                onClick={e=>{
                  handleDelete(post.id);
                }}
                style={{position: 'absolute', top:3, right:3}}>X</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
