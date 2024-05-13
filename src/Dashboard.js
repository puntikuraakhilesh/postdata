import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';


const Dashboard = () => {
    let {search}=useLocation();
    let params=new URLSearchParams(search);
 
    const [name,setName]=useState('');
    const [data,setData]=useState({
      email:'',
      password:''
    })
    const changeHandler=e=>{
      setData({...data,[e.target.name]:e.target.value})
      
    }
    const submitHandler=e=>{
      e.preventDefault();
      if(data.password.length<5){
        alert("Make password >5");
      }
      else
      {console.log(data);}
    }
    return (
      <div className='App'>
        <Link to='/'>back to HOME</Link>
        <br/>
        <p>Params Name: {params.get('name')}  {params.get('age')}</p>
        <button onClick={()=>alert("YOu pressed the button")}>
        CLik mE
        </button>
        <h1>Name: {name}</h1>
        <input  type="text" name="name" onChange={(e)=>setName(e.target.value)}></input>
        <hr />
        <center>
          <form onSubmit={submitHandler}>
            <label>
              E-Mail
            </label><br/>
            <input type="text" name="email" onChange={changeHandler}/><br />  
            <label >
            Password
            </label><br/>
            <input type="text" name="password" onChange={changeHandler}/><br />        
            <input type='submit' value='submitted' />
          </form>
  
        </center>
        <hr></hr>
      </div>
    )
  }

export default Dashboard