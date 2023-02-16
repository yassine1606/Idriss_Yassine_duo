import React from 'react'

export const Adil = ({ choix, change, choixNb, choixTmp, tmp, active4 }) => {
  return (

    <div className={`${active4} h-full`}>
      <div className="font-bold text-blue-900 text-4xl">Finishing up</div>
      <div className="text-gray-500 mt-2 mb-10">Double-check everything looks OK before fconfirming</div>

      <div className="bg-gray-100 px-3 py-2">
        <div>
          <p className="text-blue-900 font-bold">{choix}({choixTmp})</p>
          <div className="flex justify-between">
            <button onClick={change} className="text-xs text-gray-500 underline underline-offset-3 ">Change</button>
            <p className="text-blue-900 font-bold"> ${choixNb}{tmp}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

