import { useState } from "react"
import img1 from "../img/arcade.svg"
import img2 from "../img/advenced.svg"
import img3 from "../img/pro.svg"
function Idriss() {


  //state
  const [nav, setNav] = useState([
    { nb: 1, step: "step1", titre: "Your info", },
    { nb: 2, step: "step2", titre: "Select Plan" },
    { nb: 3, step: "step3", titre: "add-ons" },
    { nb: 4, step: "step4", titre: "summary" }
  ])



  const [valueUn, setValueun] = useState('')
  const [valueDeux, setValuedeux] = useState('')
  const [valueTrois, setValuetrois] = useState('')


  const [arcade, setArcade] = useState(9)
  const [advenced, setAdvenced] = useState(12)
  const [pro, setPro] = useState(15)
  const [tmp, setTmp] = useState('/mo')



  const [active1, setActive1] = useState('block')
  const [active2, setActive2] = useState('block')
  // const [active3, setActive3] = useState('hidden')
  const [active4, setActive4] = useState('block')

  const [mois, setMois] = useState('text-blue-900')
  const [year, setYear] = useState('text-gray-400')

  const [bgCard1, setBgcard1] = useState('bg-white')
  const [bgCard2, setBgcard2] = useState('bg-white')
  const [bgCard3, setBgcard3] = useState('bg-white')

  const [transition, setTransition] = useState('translate-x-0')


  //finishing
  const [choix, setChoix] = useState('')
  const [choixTmp, setChoixtmp] = useState('Monthly')
  const [choixNb, setChoixNb] = useState(0)


  // onchange
  const un = (e) => {
    setValueun(e.target.value)
  }

  const deux = (e) => {
    setValuedeux(e.target.value)
  }

  const trois = (e) => {
    setValuetrois(e.target.value)
  }



  //onclick

  const trans = () => {
    console.log(transition);
    transition === "translate-x-0" ? setTransition("translate-x-xx") : setTransition('translate-x-0');


    mois === "text-blue-900" ? setMois('text-gray-400') : setMois('text-blue-900')
    year === "text-gray-400" ? setYear('text-blue-900') : setYear('text-gray-400')

    arcade === 9 ? setArcade(90) : setArcade(9)
    advenced === 12 ? setAdvenced(120) : setAdvenced(12)
    pro === 15 ? setPro(150) : setPro(15)

    tmp === '/mo' ? setTmp('/yr') : setTmp('/mo')


    transition === "translate-x-0" ? setChoixtmp('Yearly') : setChoixtmp('Monthly')





  }

  // //finishing
  const card1 = (e) => {

    setBgcard1('bg-gray-200')

    setBgcard2('bg-white')
    setBgcard3('bg-white')

    setChoix('Arcade')
 

    setChoixNb(arcade)
  }

  const card2 = () => {
    setBgcard2('bg-gray-200')

    setBgcard1('bg-white')
    setBgcard3('bg-white')

    setChoix('Advenced')

    setChoixNb(advenced)
  }

  const card3 = () => {
    setBgcard3('bg-gray-200')

    setBgcard2('bg-white')
    setBgcard1('bg-white')


    setChoix('Pro')

    setChoixNb(pro)
  }


  // const zz = document.querySelectorAll('.test')


  // SUIVANT
  // Premier next
  const next = () => {
    setActive1('hidden')
    setActive2('block')

    setNav(nav)

    




  }

  // Deuxieme next et back
  const next2 = () => {
    setActive2('hidden')
    setActive4('block')

  }
  const back2 = () => {
    setActive1('block')
    setActive2('hidden')
    setActive4('hidden')


  }


  const change = () => {
    setActive2('block')
    setActive4('hidden')

   
 
    setChoixNb(0)

    setBgcard2('bg-white')
    setBgcard1('bg-white')
    setBgcard3('bg-white')

   
    
  }

  // 


  // if (bgCard1 === 'bg-white' && bgCard2 === 'bg-white' && bgCard3 === 'bg-white'){
  //   alert('choisi')
  // }


  
  return (
    <div className="Idriss">
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <div className="w-[60%] h-[77%] bg-white flex p-3 rounded-xl">

          <div id="b" className="rounded-xl  pl-9 pt-10 w-[30%]">
            <ul id="oui">

              <li className="flex text-white mb-7 text-sm">
                <div className={`mr-6 px-4 flex justify-center text-sm items-center rounded-full border-2 border-white font-bold test bgNb`}>1</div>
                <div className="uppercase">
                  <div className="font-light text-xs">STEP 1</div>
                  <div className="font-bold text-sm" >your info</div>
                </div>
              </li>

              <li className="flex text-white mb-7 text-sm test">
                <div className={`mr-6 px-4 flex justify-center text-sm items-center rounded-full border-2 border-white font-bold test `}>2</div>
                <div className="uppercase">
                  <div className="font-light text-xs">STEP 2</div>
                  <div className="font-bold text-sm" >SELECT PLAN</div>
                </div>
              </li>

              <li className="flex text-white mb-7 text-sm test">
                <div className={`mr-6 px-4 flex justify-center text-sm items-center rounded-full border-2 border-white font-bold test`}>3</div>
                <div className="uppercase">
                  <div className="font-light text-xs">STEP 3</div>
                  <div className="font-bold text-sm" >ADD-ONS</div>
                </div>
              </li>

              <li className="flex text-white mb-7 text-sm test">
                <div className={`mr-6 px-4 flex justify-center text-sm items-center rounded-full border-2 border-white font-bold test`}>4</div>
                <div className="uppercase">
                  <div className="font-light text-xs">STEP 4</div>
                  <div className="font-bold text-sm" >SUMMARY</div>
                </div>
              </li>


            </ul>
          </div>


          

          <div className="w-[70%]  h-full bg-white pt-10 px-20  ">

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






            <div className={`h-full ${active2}`}>
              <div className="font-bold text-blue-900 text-4xl">Select your plan</div>
              <div className="text-gray-500 mt-2 mb-10">You have the option of monthly or yearly billing</div>

              <div className="h-[33%] w-full flex mb-10 ">
                <div onClick={card1} className={`border-2 w-[35%] mr-3 rounded-xl h-full flex flex-col justify-between border-gray p-4 hover:border-2 hover:border-violet-300 cursor-pointer ${bgCard1}`}>
                  <div> <img src={img1} alt="" /></div>
                  <div>
                    <p className="font-bold text-blue-900">Arcade</p>
                    <p className="text-xs text-gray-400 font-semibold">${arcade}{tmp}</p>
                  </div>
                </div>

                <div onClick={card2} className={`border-2 w-[35%] mr-3 rounded-xl h-full flex flex-col justify-between border-gray p-4 hover:border-2 hover:border-violet-300 cursor-pointer ${bgCard2}`}>
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

              <div className="bg-blue-100 flex justify-around px-5 mb-16 py-3">
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
























            <div className={`${active4} h-full`}>

              <div className="font-bold text-blue-900 text-4xl">Finishing up</div>
              <div className="text-gray-500 mt-2 mb-10">Double-check everything looks OK before confirming</div>

              <div className="bg-gray-100 px-3 py-2">
                <p className="text-blue-900 font-bold">{choix}({choixTmp})</p>
                <div className="flex justify-between">
                  <button onClick={change} className="text-xs text-gray-500 underline underline-offset-3 ">Change</button>
                  <p className="text-blue-900 font-bold"> ${choixNb}{tmp}</p>
                </div>


              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )

}

export default Idriss
