import React from 'react'
import { Link } from 'react-router-dom'
const Home = (props) => {
  return (
    <div>
    <div>
        <h1>
            <Link to="/Login">Login</Link>
        </h1>
        <h1>
            <Link to="/Signup">Signup</Link>
        </h1>
    </div>
      <h2>
        {props.name ? `Welcome:) ${props.name}`:"Login Please"}
      </h2>

    </div>
  )
}

export default Home
