import React from 'react'


export const Yassine = ({back2, next2}) => {
  return (
    <div>
        <h1 className='text-3xl	'>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div>
            <div className='ddc p-1 border-2 rounded-md border-gray flex justify-center w-3/4 hover:bg-gray-200 hover:border-purple-800 mt-3'>
            <input type="checkbox" />
                <div className='p-4'>
                <h2> Online service</h2>
                <p >Access to multiplayer games </p>               
            </div>
            <span className='text-red-500 mt-5'>+$1/mo</span>
            </div>
            <div className='ddc p-1 border-2 rounded-md border-gray flex justify-center w-3/4 hover:bg-gray-200 hover:border-purple-800 mt-3'>
            <input type="checkbox" />
                <div className='p-4'>
                <h2> Online service</h2>
                <p >Access to multiplayer games </p>               
            </div>
            <span className='text-red-500 mt-5'>+$1/mo</span>
            </div>
            <div className='ddc p-1 border-2 rounded-md border-gray flex justify-center w-3/4 hover:bg-gray-200 hover:border-purple-800 mt-3'>
            <input type="checkbox" />
                <div className='p-4'>
                <h2> Online service</h2>
                <p >Access to multiplayer games </p>
            </div>
            <span className='text-red-500 mt-5'>+$1/mo</span>

            </div>
            <div className="flex justify-between">
                <button onClick={back2} className="text-blue-900 font-bold ">Go Back</button> <button onClick={next2} className="px-4 py-3 text-white bg-blue-900 rounded-xl ">Next Step</button>
              </div>
        </div>
    </div>
  )
}
