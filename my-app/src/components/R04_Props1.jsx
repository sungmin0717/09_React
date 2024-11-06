import React from 'react'; //imr 자동완성


/* 함수형 컴포넌트 
  - 함수명은 무조건 대문자 시작

*/

const PropsEx1 = (props) => {
  console.log("props:", props);
  console.log("props.num :", props.num);
  console.log("props.name :", props.name);

  return(
    <>


    {/* if (props.name === undefiend) {
      props.name = '기본값';
      props.num = 0;
    } */}

    <h3>Props 예제 1</h3>
    {/* undefiend 출력 X */}
    <p>
      번호 : {props.num === undefined ? 0 : props.num} 
      / 
      이름 : {props.name === undefined ? '기본값' : props.name}
    </p>
    </>
  );
}


export default PropsEx1;