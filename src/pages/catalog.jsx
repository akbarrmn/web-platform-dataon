import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCatalog } from '../Redux/Slices/catalog'

const Catalog = () => {
    const dispatch = useDispatch()
    const catalog_list = useSelector((state) => state.catalogSlices.catalog)
    useEffect(() => {
        dispatch(fetchCatalog())
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className='text-center font-bold text-xl text-black'>Bean</th>
                        <th className='text-center font-bold text-xl text-black'>Description</th>
                        <th className='text-center font-bold text-xl text-black'>Price/Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(catalog_list).length !== 0 && catalog_list.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.description}</td>
                                    <td>{`$${data.price}`}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Catalog