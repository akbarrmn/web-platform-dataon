import React from 'react'
import Logo from '../assets/image-logo.png'
const Header = () => {
    return (
        <div className='flex gap-5'>
            <img src={Logo} alt="logo" className='max-w-40'/>
            <div className='flex flex-col'>
                <h1 className='text-5xl font-extrabold italic text-amber-800'>Coffe Valley</h1>
                <p className='text-xl font-bold italic tracking-wider'>Taste the love in every cup!</p>
                <p>One Alewife Center 3rd Floor</p>
                <p>Cambridge, 02140</p>
            </div>
        </div>
    )
}

export default Header