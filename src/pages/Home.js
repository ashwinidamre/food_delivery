import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
function Home() {
  return (
    <div className="home">
      <div className='headerContainer'>
      <h1>Pedro's Pizzeria</h1>
      <p>PIZZA TO FIT ANY TASTE</p>
      <Link to="/menu">
      <button>ORDER NOW</button>
      </Link>
      </div>
    </div>
  )
}

export default Home
