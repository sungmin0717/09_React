import React from 'react'; //imr 자동완성
import '../css/Props.css'
// css를 해당 jsx파일에 import했다고해서
// 해당 파일에만 적용되는 것이 아닌
// 출력된 화면에 모두 적용된다!!

const propsEx2 = (props) => {

  //구조 분해 할당(객체{})
  let {name, age, address, gender} = props;

  return(
    <>
      {/* react에서 class 속성은 'className'이라고 작성해야함! */}
      <ul className='info'>

        <li> 이름 : {name} </li>
        <li> 주소 : {address} </li>
        <li> 성별 : {gender} </li>
        <li> 
          나이 :
          {age < 20 
          ? <span className='red'>미성년자 입니다</span> //t
          : <span className='green'>성인 입니다</span>   //f
          } 
        </li>

      </ul>

    
    
    </>
  );
}


export default propsEx2;

