import React, {createContext} from 'react';

/* Context 객체를 어디서든 사용할수 있게 
 별도 파일에 생성 후 export
  -> 필요한 파일에서 inmort
 */

const UserContext = createContext();
export default UserContext;