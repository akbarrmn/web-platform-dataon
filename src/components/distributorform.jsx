import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { fetchSingle } from '../Redux/Slices/distributor'
import { useDispatch, useSelector } from 'react-redux'

const DistributorForm = () => {
    const dispatch = useDispatch()
    const path = useLocation().pathname
    const id = useParams().id
    const distributor_list = useSelector((state) => state.distributorSlices.single)
    
    useEffect(() => {
        dispatch(fetchSingle(id))
    }, [])
    console.log(distributor_list)

    return (
        <>
            <form action="" className='max-w-lg flex flex-col gap-5'>
                <div className='grid grid-cols-3 gap-5'>
                    <label className="label">Distributor Name</label>
                    <input type="text" value={distributor_list?.name} className="input col-span-2 input-bordered border-4 w-full max-w-xs" />
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <label className="label">City</label>
                    <input type="text" value={distributor_list?.state} className="input col-span-2 input-bordered border-4 w-full max-w-xs" />
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <label className="label">State/Region</label>
                    <input type="text" value={distributor_list?.region} className="input col-span-2 input-bordered border-4 w-full max-w-xs" />
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <label className="label">Country</label>
                    <select value={"Argentina"} className="select select-bordered border-4 w-full max-w-xs col-span-2">
                        <option value={"Argentina"} selected>Argentina</option>
                        <option value={"Greedo"}>Greedo</option>
                    </select>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <label className="label">Phone</label>
                    <input type="text" value={distributor_list?.phone} className="input col-span-2 input-bordered border-4 w-full max-w-xs" />
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <label className="label">Email</label>
                    <input type="text" value={distributor_list?.email} className="input col-span-2 input-bordered border-4 w-full max-w-xs" />
                </div>
                {!path.includes("edit") ?
                    <button className='btn bg-amber-800 text-white mt-10 max-w-[200px]'>Add</button> :
                    <button className='btn bg-amber-800 text-white mt-10 max-w-[200px]'>Edit</button>
                }
            </form>
        </>
    )
}

export default DistributorForm