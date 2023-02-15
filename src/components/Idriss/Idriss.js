import { useState } from "react"
import { Adil } from "./Adil/Adil"

function Idriss() {

//state
  const [nav] = useState([
    {nb:1, step:"step1", titre:"Your info"},
    {nb:2, step:"step2", titre:"Select Plan"},
    {nb:3, step:"step3", titre:"add-ons"},
    {nb:4, step:"step4", titre:"summary"}
  ])



//Function
  return (
    <div className="Idriss">
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="w-[60%] h-[70%] flex">

          <div className="bg-blue-400 p-7 w-[30%]">
            <ul>
            {nav.map((donnees) => (
              <li className="flex text-white mb-7">
                <div className="mr-6 px-4 flex justify-center items-center rounded-full border-2 border-white font-bold">{donnees.nb}</div>
                <div className="uppercase">
                  <div className="font-light text-sm">{donnees.step}</div>
                  <div className="font-bold" >{donnees.titre}</div>
                </div>
              </li>
            ))}


            </ul>
          </div>

          <div className="w-[70%]">


              <Adil/>

          </div>

        </div>
      </div>
    </div>
  )

}

export default Idriss