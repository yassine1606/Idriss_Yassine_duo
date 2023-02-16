import React from 'react'
import { useState } from 'react';


export const Yassine = ({back3, next3,active3,nom1,prix1,nom2,prix2,nom3,prix3,ajoutp}) => {
  return (
    <div className={`${active3}`}>
        <h1 className='text-3xl	'>Pick add-ons</h1>
        <p>Add-ons help enhance your gam ing experience</p>
        <div >
        <div onClick={ajoutp}  className={`ddc p-1 cursor-pointer border-2 rounded-md border-gray flex justify-center w-3/4 mt-3  'hover:bg-gray-200 hover:border-purple-800'}`}>
        <input type="checkbox" />
        <div className='p-4'>
        <h2>{nom1}</h2>
        <p>Access to multiplayer games </p>               
            </div>
            <span className='text-red-500 mt-5'>{prix1}</span>
            </div>
            <div className={`ddc p-1 border-2 rounded-md border-gray flex justify-center w-3/4 mt-3  border-purple-800' : 'hover:bg-gray-200 hover:border-purple-800'}`}>
                <input type="checkbox" />
                <div className='p-4'>
                <h2>{nom2}</h2>
                <p >Access to multiplayer games </p>               
            </div>
            <span className='text-red-500 mt-5'>{prix2}</span>
            </div>
            <div className={`ddc p-1 border-2 rounded-md border-gray flex justify-center w-3/4 mt-3  'bg-gray-200 border-purple-800' : 'hover:bg-gray-200 hover:border-purple-800'}`} >   
                <input type="checkbox" />
                <div className='p-4'>
                <h2>{nom3}</h2>
                <p >Access to multiplayer games </p>
            </div>
            <span className='text-red-500 mt-5'>{prix3}</span>
            </div>
            <div className="flex justify-between">
                <button onClick={back3} className="text-blue-900 font-bold ">Go Back</button> <button onClick={next3} className="px-4 py-3 text-white bg-blue-900 rounded-xl ">Next Step</button>
              </div>
        </div>
    </div>
  )
}
