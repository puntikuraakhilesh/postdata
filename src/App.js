/*import React,{useState} from 'react'
import Test from './Test'

function App() {
  const [name,setName]=useState({name:"Akhil",age:28});
  return (
    <div>
      <center>
        <h1>Name:{name.name}</h1>
        <Test x={name.name} y={name.age}></Test>
      </center>

    </div>
  )
}

export default App*/













/*import React from "react";
import Test from "./Test";
class App extends React.Component{
  state={name:"john",age:30}
  
  render(){
    let name="Akhilesh";

    
    return(
      <div>
        <center>
          <h1>Hell is from {name} and {this.state.name}</h1>
          <Test name={this.state.name} age={this.state.age}/>
        </center>
      </div>
    )
  }
}

export default App;*/














/*
import React,{useState} from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
*/

















/*
import React, { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import About from './About';
import Pagenotfound from './Pagenotfound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
*/













/*
import React from 'react'
import Hoc from './Hoc'

const App = (props) => {
  return (
    <div>In the App.js{props.name}</div>
  )
}

export default Hoc(App);
*/









import React,{useState} from 'react'

const App = () => {
  const [data,setData]=useState({
    name:'',
    age:''
  })

  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const submitHandler = e =>{
    e.preventDefault();



    fetch('https://test-api-3aaed-default-rtdb.firebaseio.com/data.json',
      {
        method:'POST',
        body:JSON.stringify(data),
        headers:{"Content-Type":"Application/json;charset=UTF-8"}
      }
    ).then(res=>alert('Data Posted')).catch(err=>console.log(err))


    
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label>
            Name:
          </label>
          <input name='name' type='text' onChange={changeHandler}/>
          <label>
            Age:
          </label>
          <input name='age' type='text' onChange={changeHandler}/>
          <input type='submit' value='Post data' />
        </form>
        

      </center>
    </div>
  )
}

export default App





















