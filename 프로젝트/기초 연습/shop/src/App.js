import logo from './logo.svg';

import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import{Routes, Route, Link , useNavigate , Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js';



function App(){
  let [shoes , buy] = useState(data);
  let navigate = useNavigate();
  return (
    <div className='App'>
        <Navbar bg="white" variant="black">
          <Container >
          <Navbar.Brand href="#home" className='navbar'>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}} className="link" to = '/'>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}} className="link" to = '/'>Best</Nav.Link>
            <Link className="link" to = '/'>New</Link>
          </Nav>
          </Container>
        </Navbar>
        


      <Routes>
        <Route path="/" element= {
          <>
      <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
      <div className="container">
        <div className="row">
          {/* <Card shoes = {shoes[0]} i ={1}></Card>
          <Card shoes = {shoes[1]} i ={2}></Card>
          <Card shoes = {shoes[2]} i ={3}></Card> */}
          {
            shoes.map((a , i) => {
              return (
                <Card shoes={shoes[i]} i={i}></Card>
              )
            })
          }
        </div>
        </div>
        </>
        }></Route>

        <Route path="/detail/:id" element= {<Detail shoes={shoes} ></Detail>}></Route>
        <Route path='*' element={<div>없는 페이지 입니다.</div>}></Route>



        <Route path="/about" element= {<About></About>}>
        <Route path="member" element= {<div>멤버</div>}></Route>
        <Route path="location" element= {<div>대전</div>}></Route>
        </Route>

        <Route path="/event" element= {<Event></Event>}>
        <Route path="event1" element= {<div>첫 주문시 양배추 서비스</div>}></Route>
        <Route path="event2" element= {<div>생일 쿠폰 서비스</div>}></Route>
        </Route>

    
        



      </Routes>


      <div>
      </div>
    </div>
      
    
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
          <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </div>
  )
}


function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
    )
}





export default App;
