import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const NavBar = () => {
  return (
    <nav className={style.ctn}>
        <ul className={style.list}>
            <li>
                <Link to='/'>
                    <Button>Home</Button>
                </Link>
            </li>
            <li>
                <Link to='/insert'>
                    <Button>Incluir</Button>
                </Link>
            </li>
            <li>
            <Link to='/list'>
                    <Button>Listar</Button>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar