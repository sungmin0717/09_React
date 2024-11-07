import './App.css';
import ClassComponent from './components/R01_ClassComponent';
// import여기서 사용할 이름 from '경로'
import Props1 from './components/R04_Props1';
import Props2 from './components/R04_Props2';
import Props3 from './components/R05_Props3';

import State1 from './components/R06_State1';
import State2 from './components/R07_State2';
import State3 from './components/R08_State3';



import StateReview1 from './review/State_Review1';
import StateReview2 from './review/State_Review2';

import Context1 from './components/R09_Context1';
import Context2 from './components/R10_Context2';
import Context3 from './R11_Context3/Parent';
// // R01_ClassComponent에서 expoert된 HTML 요소를
// ClasssComponent라고 불른다
// 기본적으로 //, /**/ 주석 사용 가능(JS니깐!)
// 단, HTML 코드가 작성되는 영역에서는 {/**/} 주석 사용
import FunctionComponent from './components/R02_FunctionComponent';




function App() {
  return (
    <>
      {/*JSX(JS에 HTML 코드 포함) 주석*/}
      {/* 클래스형 컴포넌트 */}
      {/*<ClassComponent/> }*/}
      {/*<FunctionComponent/>*/}
     
      {/* <Props1 num='1' name='홍길동'/>
      
      <Props1 num='2' name='기무찌'/>

      <hr/>
    

      <Props2 name='오미제'
              age='68'
              address='의정부'
              gender='여자'
              />

      <Props2 name='짱구'
              age='5'
              address='중구'
              gender='남자'
              />


      <hr/>

      <Props3 productName='라면' price='3000'/> */}


{/* 
      <State1/>
      <hr/>
      <State2 init='0'/>
      <hr/>
      <State3/> */}
      {/* State 복습 */}
      {/* <StateReview1/> */}
      {/* <StateReview2/> */}
      {/* <Context1/> */}
      {/* <Context2/> */}
      <Context3/>
    </>    
  );
}

export default App;
