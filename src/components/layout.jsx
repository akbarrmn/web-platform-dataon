import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MainContainer from './container'
import Header from './header'

const RootLayout = ({ children }) => {
    const path = useLocation().pathname
    return (
        <MainContainer>
            <Header />
            <div className='flex flex-col gap-5 mt-10 w-full'>
                <nav className='flex gap-5 w-full justify-between items-center'>
                    <Link to={"/home"} className='text-white bg-amber-800 px-10 py-2 flex flex-1 justify-center'>Home</Link>
                    <Link to={"/catalog"} className='text-white bg-amber-800 px-10 py-2 flex flex-1 justify-center'>Catalog</Link>
                    <Link to={"/order"} className='text-white bg-amber-800 px-10 py-2 flex flex-1 justify-center'>Order Status</Link>
                    <Link to={"/distributors"} className='text-white bg-amber-800 px-10 py-2 flex flex-1 justify-center'>Distributors</Link>
                    <Link to={"/upload"} className='text-white bg-amber-800 px-10 py-2 flex flex-1 justify-center'>Upload</Link>
                    <Link to={"/"} className='text-white bg-amber-800 px-10 py-2 flex flex-1 justify-center'>Logout</Link>
                </nav>
                <div className='mt-5'>
                    {children}
                </div>
                <footer className={`w-full flex justify-center mt-10 ${path.includes("/distributors") || path.includes("/upload") ? "hidden" : ""}`}>
                    <h1 className='text-lg font-bold'>January 25, 2024</h1>
                </footer>
            </div>
        </MainContainer>
    )
}

export default RootLayout