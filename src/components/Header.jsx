import React from 'react'
import second from '../assets/crypto-coin.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-darkenBlack backdrop-blur-md'>
        <div className="containerb flex items-center justify-between h-20">
            <Link><img src={second} className='h-full w-32' alt="" /></Link>
        </div>

    </header>
  )
}

export default Header