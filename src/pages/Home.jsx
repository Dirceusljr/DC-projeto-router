import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div style={{backgroundColor: '#F57D1F'}} >
        <NavBar />
        <h1>Página Principal de Produtos</h1>
        <Outlet />
    </div>
  )
}

export default Home