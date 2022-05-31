/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "05월 31일자";
  let [ 글제목 , 글제목변경 ] = useState(['아디다스' , '나이키' , '뉴발란스']);
  let [따봉, 따봉추가] = useState([0 , 0 , 0]);
  let [modal , setModal] = useState(false);
  let [title , setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>
      {/* <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[0]}<span onClick={()=>{따봉추가(따봉+1)}}> 👍</span> {따봉} </h4>
        <p>5월 31일 발행</p>
      </div>
      <div className='list'>
      <h4>{글제목[1]}</h4>
        <p>5월 31일 발행</p>
      </div>
      <div className='list'>
      <h4>{글제목[2]}</h4>
        <p>5월 31일 발행</p>
      </div> */
      
      
      글제목.map(function(a , i){
        return (
          <div className='list' key={i}>
           <h4 onClick={()=>{setModal(true); setTitle(i);}}>{글제목[i]}<span onClick={(e)=>{
             e.stopPropagation();
             let copy = [...따봉];
             copy[i] = copy[i] + 1;
             따봉추가(copy);
             }}> 👍</span> {따봉[i]} </h4>
            <p>5월 31일</p>
            <button onClick={(e)=>{
              let copy = [...글제목];
              copy.splice(i , 1);
              글제목변경(copy)
              copy[i] = copy[i] + 1;
              좋아요(copy)
            }}>삭제</button>
          </div>
        )
      })

      
          }
      

      <input onChange={(e)=>{입력값변경(e.target.value);
      console.log(입력값);}}></input>
      <button onClick={(e)=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
      }}> 추가 </button>
    
      {
        modal == true ? <Modal title = {title} 글제목 = {글제목}></Modal> : null
      }

      

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '슈퍼스타';
        글제목변경(copy)
      }}>변경</button>
      <button onClick={()=>{
        let copy =[...글제목];
        copy.sort();
        글제목변경(copy);
      }}>정렬</button>
  
    </div>
  );
}





function Modal(props){
  return (
      <>    
      <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
      <button onClick={()=>{
      props.글제목변경();
       let copy =[...글제목];
       copy[0] = '슈퍼스타';
       글제목변경(copy)}}>글 수정</button>
      </>

  )
}


export default App;

//  모달창 ~ props를 응용한 상세페이지 만들기