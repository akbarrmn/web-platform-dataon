import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchDistributor } from '../Redux/Slices/distributor'

const Distributors = () => {
    const dispatch = useDispatch()
    const distributor_list = useSelector((state) => state.distributorSlices.distributors)
    useEffect(() => {
        dispatch(fetchDistributor())
    }, [])

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='font-bold text-xl text-black'>Distributor Name</th>
                            <th className='font-bold text-xl text-black'>City</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(distributor_list).length !== 0 ? distributor_list.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.name}</td>
                                        <td>{data.state}</td>
                                        <td><Link to={`/distributors/edit/${data.id}`} className='text-black font-bold'>{"[Edit]"}</Link></td>
                                    </tr>
                                )
                            }): <h1 className='text-2xl'>Loading...</h1>
                        }
                    </tbody>
                </table>
            </div>
            <div className='mt-10 ml-4'>
                <Link to={'/distributors/add'} className='text-black font-bold'>{"[Add]"}</Link>
            </div>
        </>
    )
}

export default Distributors