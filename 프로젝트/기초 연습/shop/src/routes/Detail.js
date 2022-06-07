import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

// let YellowBtn = styled.button`
// background: ${props => props.bg};
// color : black;
// padding : 10px;
// `
// let Box = styled.div `
// background : grey;
// padding : 20px;
// `

function Detail(props){
    useEffect(()=>{

      setTimeout(()=>{ setAlert(false) }, 2000)
    }, [])
    
    let [count , setCount] = useState(0)
    let [alert , setAlert] = useState(true)

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
      return x.id == id
    });
    
  return(
        <div className="container">
          {
            alert == true ?
          <div className="alert alert-warning">
            2초이내 구매하세요 !
          </div>
          :null

          }
         
          
          {count}
          <button onClick={()=>{setCount(count+1)
          }}>버튼</button>
          {/* <Box>
          <YellowBtn bg="blue">버튼</YellowBtn>
          <YellowBtn bg="royalblue">버튼</YellowBtn>
          </Box> */}
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{props.shoes[id].title}</h4>
              <p>{props.shoes[id].price}</p>
              <p>{props.shoes[id].content}</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 

  )
}

  export default Detail;