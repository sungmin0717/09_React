import React from 'react'; // imr 자동완성

//컴포넌트
const Child1 = (props) => {


  let {productName, option, price} = props;

  return(
    <>
      <h3>Child1</h3>
      <ul className='info'>
        <li> 메뉴명 : {productName} (App.js)</li>
        <li> 옵션 : {option} (PropsEX)</li>
        <li>price : {price}원 (Props(PropsEx3)에서 가공)</li>
      </ul>
    </>
  );
}

//컴포넌트
const Child2 = (props) => {

  let {productName,addMenu,price} = props;
  return(
  <>
    <h3>Child2</h3>
    <ul className='info'>
        <li> 메뉴명 : {productName} (App.js)</li>
        <li> 추가 메뉴 : {addMenu} (PropsEX)</li>
        <li>price : {price}원 (Props(PropsEx3)에서 가공)</li>
      </ul>
  </>
  );
}




const PropsEx3 = (props) => {


  let {productName, price} = props;

  //App.js에서 전달 받은 값을 Child1/2에 다시 전달
  // -> Props Drilling(생태 내리꽂기)
  return(
    <>
      <Child1 productName={productName}
              option='치즈 추가'
              price={Number(price) + 1000}/>

      <Child2 productName={productName}
              addMenu='김밥 한줄'
              price={Number(price)+3000}/>
    </>
  );
}


export default PropsEx3;