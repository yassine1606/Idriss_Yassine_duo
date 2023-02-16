import React from 'react'

export const Cmp2 = ({active2,card1,card2,card3,bgCard1,bgCard2,bgCard3,next2,back2,arcade,pro,advenced,tmp,trans,transition,img1,img2,img3,mois,year}) => {
    return (

        <div className={`h-full ${active2}`}>
            <div className="font-bold text-blue-900 text-4xl">Select your plan</div>
            <div className="text-gray-500 mt-2 mb-10">You have the option of monthly or yearly billing</div>

            <div className="h-[180px] w-full flex mb-10 ">
                <div onClick={card1} className={`border-2 w-[35%]  mr-3 rounded-xl h-full flex flex-col justify-between border-gray p-4 hover:border-2 hover:border-violet-300 cursor-pointer ${bgCard1}`}>
                    <div> <img src={img1} alt="" /></div>
                    <div>
                        <p className="font-bold text-blue-900">Arcade</p>
                        <p className="text-xs text-gray-400 font-semibold">${arcade}{tmp}</p>
                    </div>
                </div>

                <div onClick={card2} className={`border-2 w-[35%]  mr-3 rounded-xl h-full flex flex-col justify-between border-gray p-4 hover:border-2 hover:border-violet-300 cursor-pointer ${bgCard2}`}>
                    <div> <img src={img2} alt="" /></div>
                    <div>
                        <p className="font-bold text-blue-900">Advenced</p>
                        <p className="text-xs text-gray-400 font-semibold">${advenced}{tmp}</p>
                    </div>
                </div>

                <div onClick={card3} className={`border-2 w-[35%]  rounded-xl h-full flex flex-col justify-between border-gray p-4 hover:border-2 hover:border-violet-300 cursor-pointer ${bgCard3}`}>
                    <div> <img src={img3} alt="" /></div>
                    <div>
                        <p className=" font-bold text-blue-900">Pro</p>
                        <p className="text-xs text-gray-400 font-semibold">${pro}{tmp}</p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-100 mb-14 flex justify-around px-5 py-3">
                <div className={`font-bold ${mois}`}>Monthly</div>
                <div>
                    <button onClick={trans} className="bg-blue-900 w-[50px] rounded-xl h-[85%] p-1">
                        <div className={`bg-white w-[30%] rounded-full h-full ${transition} transition delay-400 duration-200 linear cursor-pointer`}></div>
                    </button>
                </div>
                <div className={`font-bold ${year}`}>Yearly</div>
            </div>

            <div className="flex justify-between">
                <button onClick={back2} className="text-blue-900 font-bold ">Go Back</button> <button onClick={next2} className="px-4 py-3 text-white bg-blue-900 rounded-xl ">Next Step</button>
            </div>

        </div>


    )
}
