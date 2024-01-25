import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Middleware = () => {
    const userLogin = useSelector((state) => state.authSlices.user)

    return (
        <>
            {userLogin ?
                    <Outlet />
                    :
                    <Outlet />
            }
        </>
    )
}

export default Middleware