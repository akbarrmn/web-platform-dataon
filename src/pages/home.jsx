import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-extrabold text-xl'>Bean of the Day</h1>
                <p className='text-xl'>Cubita</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-extrabold text-xl'>Sale Price</h1>
                <p className='text-xl'>$11.00</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-extrabold text-xl'>Description</h1>
                <p className='text-xl'>Cubita Coffee is sun dried and hand sorted. It originates from an elevation of over 2000 meters inthe Andres Mountains of Ecuador, which is located closest to the sun on the Equador. Superb aroma and rich Flavour</p>
            </div>
        </div>
    )
}

export default Home