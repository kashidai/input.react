import React, {Component} from 'react';

const App = (props) => {

  const obj = {
    name:"Tom",
    age:24,

  }

  const {name,age} = obj;

  console.log(name);

  return (
      <div>
        {age}
      </div>
  )
}


export default App;
