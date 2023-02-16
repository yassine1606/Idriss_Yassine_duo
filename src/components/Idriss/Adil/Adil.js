import React from 'react'

export const Adil = () => {
  return (
    <div className='p-5'>
      <div className='text-3xl mb-3'>
        Finishing up
      </div>
      <div className='text-sm mb-5'>
        Double-check everything looks OK before confirming
      </div> 
      <div className='bg-gray-100 p-10'>
      <div className='flex justify-between'>
        <div>
          <div className='text-blue-900 flex flex-col'>
            Arcade(Monthly)
          </div>
          <div className='text-sm text-decoration-line: underline'>
            <a href="">Change</a>
          </div>
        </div>
        <div className='text-blue-900 mt-3'>
          $9/mo
        </div>
      </div>
      <hr/>
      <div className='flex justify-between'>
        <div>
          Larger storag
        </div>
        <div className='text-blue-900'>
          +$2/mo
        </div>
      </div>
      </div>
      <div className='flex justify-between p-10'>
        <div>
          Total (per month)
        </div>
        <div className='text-blue-900    '>
          $11/mo
        </div>
      </div>
    </div>
  )
}

