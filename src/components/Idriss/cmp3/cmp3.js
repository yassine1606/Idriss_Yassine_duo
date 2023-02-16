import React from 'react'

export const Cmp3 = ({active2,card11,card22,card33,bgCard11,bgCard22,bgCard33,next2,back2,img1Phone1,img2Phone2,img3Phone3,iphone,ultra,oneplus}) => {
    return (

        <div className={`h-full ${active2}`}>
            <div className="font-bold text-blue-900 text-4xl">Select your Phone</div>
            <div className="text-gray-500 mt-2 mb-10">You have the option of phones</div>

            <div className="h-[33%] w-full flex mb-10 ">
                <div onClick={card11} className={`border-2 w-[35%] mr-3 rounded-xl h-full flex flex-col justify-between border-gray p-4 hover:border-2 hover:border-violet-300 cursor-pointer ${bgCard11}`}>
                    <div> <img className='w-screen h-20' src={img1Phone1} alt=""/></div>
                    <div>
                        <p className="font-bold text-blue-900">Iphone 14</p>
                        <p className="text-xs text-gray-400 font-semibold">${iphone}</p>
                    </div>
                </div>

                <div onClick={card22} className={`border-2 w-[35%] mr-3 rounded-xl h-full flex flex-col justify-between border-gray p-4 hover:border-2 hover:border-violet-300 cursor-pointer ${bgCard22}`}>
                    <div> <img src={img2Phone2}className='w-screen h-20' alt="" /></div>
                    <div>
                        <p className="font-bold text-blue-900">S23 Ultra</p>
                        <p className="text-xs text-gray-400 font-semibold">${ultra}</p>
                    </div>
                </div>

                <div onClick={card33} className={`border-2 w-[35%]  rounded-xl h-full flex flex-col justify-between border-gray p-4 hover:border-2 hover:border-violet-300 cursor-pointer ${bgCard33}`}>
                    <div> <img src={img3Phone3}className='w-screen h-20' alt="" /></div>
                    <div>
                        <p className=" font-bold text-blue-900">One Plus 10</p>
                        <p className="text-xs text-gray-400 font-semibold">${oneplus}</p>
                    </div>
                </div>
            </div>


            <div className="flex justify-between">
                <button onClick={back2} className="text-blue-900 font-bold ">Go Back</button> <button onClick={next2} className="px-4 py-3 text-white bg-blue-900 rounded-xl ">Next Step</button>
            </div>

        </div>


    )
}
