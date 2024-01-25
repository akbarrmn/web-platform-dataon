import React from 'react'
import Logo from '../assets/image-logo.png'

const Login = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='flex flex-col gap-5'>
                <img src={Logo} alt="logo" />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-5xl font-extrabold italic text-amber-800'>Coffe Valley</h1>
                    <p className='text-xl font-bold italic tracking-wider'>Taste the love in every cup!</p>
                    <p>One Alewife Center 3rd Floor</p>
                    <p>Cambridge, 02140</p>
                </div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">User ID</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered border-4 w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Password</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered border-4 w-full max-w-xs" />
                </label>
                <div className='flex justify-end'>
                    <button className="btn bg-amber-800 text-white font-bold">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login