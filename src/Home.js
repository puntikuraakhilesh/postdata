import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Home = () => {
    const user="John";
  return (
    <div>
        <center>
            <h1>
                This is the HOME Page
               
                <Link to={`/dashboard?name=${user}&age=${26}`}> Dashboard</Link>

                <br />
                <Link className='Link' to='/about'> About</Link>

            </h1>
        </center>
    </div>
  )
}

export default Home