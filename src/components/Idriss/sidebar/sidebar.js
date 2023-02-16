import React from 'react'

export const Sidebar = () => {
    return (

        <div id="b" className="rounded-xl  pl-9 pt-10 w-[30%]">
            <ul id="oui">

                <li className="flex text-white mb-7 text-sm">
                    <div className={`mr-6 px-4 flex justify-center text-sm items-center rounded-full border-2 border-white font-bold test bgNb`}>1</div>
                    <div className="uppercase">
                        <div className="font-light text-xs">STEP 1</div>
                        <div className="font-bold text-sm" >your info</div>
                    </div>
                </li>

                <li className="flex text-white mb-7 text-sm  ">
                    <div className={`mr-6 px-4 flex justify-center text-sm items-center rounded-full border-2 border-white font-bold test`}>2</div>
                    <div className="uppercase">
                        <div className="font-light text-xs">STEP 2</div>
                        <div className="font-bold text-sm" >SELECT PLAN</div>
                    </div>
                </li>

                <li className="flex text-white mb-7 text-sm  ">
                    <div className={`mr-6 px-4 flex justify-center text-sm items-center rounded-full border-2 border-white font-bold test`}>3</div>
                    <div className="uppercase">
                        <div className="font-light text-xs">STEP 3</div>
                        <div className="font-bold text-sm" >ADD-ONS</div>
                    </div>
                </li>

                <li className="flex text-white mb-7 text-sm  ">
                    <div className={`mr-6 px-4 flex justify-center text-sm items-center rounded-full border-2 border-white font-bold test`}>4</div>
                    <div className="uppercase">
                        <div className="font-light text-xs">STEP 4</div>
                        <div className="font-bold text-sm" >SUMMARY</div>
                    </div>
                </li>


            </ul>
        </div>

    )
}
