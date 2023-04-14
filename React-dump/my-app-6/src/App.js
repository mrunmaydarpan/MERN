import React from "react"
import UserContext from "./Api/UserContext";
import Child from './Component/Child'

function App() {

  return (
    <UserContext>
      <Child />
    </UserContext>
  );
}

export default App;
