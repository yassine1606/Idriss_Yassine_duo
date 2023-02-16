import React from 'react'

export const Cmp1 = ({active1,valueUn,valueDeux,valueTrois,un,deux,trois,next}) => {
  return (
 
          <div className={`${active1} h-full`}>
              <div className="font-bold text-blue-900 text-4xl">Personal info</div>
              <div className="text-gray-500 mt-2 mb-10">Please provide your name, email, address, and phone number</div>
              <div className="mb-5">
                <p className="text-blue-900 font-bold">Your name is:{valueUn}</p>
                <input id="ipt" className="p-2 w-full border-2 border-gray-200 rounded-xl" type="text" onChange={un} placeholder="Vingt-Six" />
              </div>
              <div className="mb-5">
                <p className="text-blue-900 font-bold">Your email is:{valueDeux}</p>
                <input className="p-2 w-full border-2 border-gray-200 rounded-xl" type="text" onChange={deux} placeholder="vingt-six@email.com" />
              </div>
              <div className=" mb-20">
                <p className="text-blue-900 font-bold">Your name is:{valueTrois}</p>
                <input className="p-2 w-full border-2 border-gray-200 rounded-xl" type="text" onChange={trois} placeholder="e.g+1 234 567 890" />
              </div>
              <div className="flex justify-end">
                <button onClick={next} className="px-4 py-3 text-white bg-blue-900 rounded-xl ">Next Step</button>
              </div>
            </div>


   
  )
}
