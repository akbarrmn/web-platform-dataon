import React from 'react'

const Upload = () => {
    return (
        <>
            <form action="" className='max-w-lg flex flex-col gap-5'>
                <div className='grid grid-cols-3 gap-5'>
                    <label className="label">Title</label>
                    <input type="text" placeholder="Type here" className="input col-span-2 input-bordered border-4 w-full max-w-xs" />
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <label className="label">Document File</label>
                    <label className="form-control w-full col-span-2">
                        <input type="file" className="file-input border-4 file-input-md file-input-bordered w-full max-w-[320px]" />
                    </label>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <label className="label">Author</label>
                    <input type="text" placeholder="Type here" className="input col-span-2 input-bordered border-4 w-full max-w-xs" />
                </div>
                <button className='btn bg-amber-800 text-white mt-10 max-w-[200px]'>Add Document</button>
            </form>
            <p className='mt-5 text-neutral-600'>There are currently no reports in the library</p>
        </>
    )
}

export default Upload