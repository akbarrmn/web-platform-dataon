import React from 'react'

const MainContainer = (props) => {
    return (
        <div className='px-20 py-12'>
            {props.children}
        </div>
    )
}

export default MainContainer