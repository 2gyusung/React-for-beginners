import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남', '부산']);
  let [따봉, 따봉변경] = useState([0, 0, 0])
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <>
        <div style={{ color: 'royalblue' }} className='black-nav'>
          <h4>블로그</h4>
        </div>
        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '패딩 추천';
          글제목변경(copy)
        }}>버튼</button>

        <button onClick={() => {
          let copy2 = [...글제목];
          copy2.sort();
          글제목변경(copy2)
        }}>
          정렬
        </button>
        {
          글제목.map(function (a, i) {
            return (
              <div className="list" key={i}>
                <h4 onClick={() => setModal(true)}>{글제목[i]}
                  <span onClick={() => {
                    let copy3 = [...따봉];
                    copy3[i] = copy3[i] + 1;
                    따봉변경(copy3)
                    // let copy3 = [...따봉];
                    // copy3[i] = copy3[i] + 1;
                    // 따봉변경(copy3)
                  }}>👍{따봉[i]} </span></h4>
                <p>2월 18일 발행</p>
              </div>
            )
          })
        }
        {
          modal == true ? <Modal color={'yellow'} 글제목변경={글제목변경} 글제목={글제목} /> : null
        }

      </>
    </div>

  );
}



function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy4 = [...props.글제목];
        copy4[0] = '패딩추추천'
        props.글제목변경(copy4)
      }}>변경</button>
    </div>
  )
}



export default App;
