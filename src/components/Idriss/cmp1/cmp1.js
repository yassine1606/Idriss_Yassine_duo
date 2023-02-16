import React, { useState } from 'react'
 
export const Cmp1 = ({ active1, valueUn, valueDeux, valueTrois, un, deux, trois, next }) => {


    const [focus, setFocus] = useState('hidden')
    const [focus2, setFocus2] = useState('hidden')
    const [focus3, setFocus3] = useState('hidden')


    const input = () => {
        setFocus('block')
    }

    const kitt = () => {
        setFocus('hidden')
    }

    const input2 = () => {
        setFocus2('block')
    }

    const kitt2 = () => {
        setFocus2('hidden')
    }

    const input3 = () => {
        setFocus3('block')
    }

    const kitt3 = () => {
        setFocus3('hidden')
    }

    return (

        <div className={`${active1} h-full`}>
            <div className="font-bold text-blue-900 text-4xl">Personal info</div>
            <div className="text-gray-500 mt-2 mb-10">Please provide your name, email, address, and phone number</div>
            <div className="mb-5 relative">
                <p className="text-blue-900  font-bold">Your name is:{valueUn}</p>
                <input id="ipt" onFocus={input} onBlur={kitt} className="p-2 w-full border-2  border-gray-200 rounded-xl" type="text" onChange={un} placeholder="Vingt-Six" /> <select name="" className={`absolute top-8 right-4 ${focus}`} id=""><option value="span">span</option></select>
            </div>
            <div className="mb-5 relative">
                <p className="text-blue-900 font-bold">Your email is:{valueDeux}</p>
                <input onFocus={input2} onBlur={kitt2}  className="p-2 w-full border-2 border-gray-200 rounded-xl" type="text" onChange={deux} placeholder="vingt-six@email.com" />
                <select name="" className={`absolute top-8 right-4 ${focus2}`} id=""><option value="span2">span2</option></select>
            </div>
            <div className=" mb-20 relative">
                <p className="text-blue-900 font-bold">Your name is:{valueTrois}</p>
                <input onFocus={input3} onBlur={kitt3}  className="p-2 w-full border-2 border-gray-200 rounded-xl" type="text" onChange={trois} placeholder="e.g+1 234 567 890" />
                <select name="" className={`absolute top-8 right-4 ${focus3}`} id=""><option value="span">span3</option></select>
            </div>
            <div className="flex justify-end">
                <button onClick={next} className="px-4 py-3 text-white bg-blue-900 rounded-xl ">Next Step</button>
            </div>
        </div>



    )
}
