import { useState } from "react"
import img1 from "../img/arcade.svg"
import img2 from "../img/advenced.svg"
import img3 from "../img/pro.svg"
import { Cmp1 } from "./cmp1/cmp1"
import { Cmp2 } from "./cmp2/cmp2"
import { Adil } from "./Adil/Adil"
import { Sidebar } from "./sidebar/sidebar"
import { Yassine } from "./yassine/yassine"
function Idriss() {


  //state
  const [nav, setNav] = useState([
    { nb: 1, step: "step1", titre: "Your info", },
    { nb: 2, step: "step2", titre: "Select Plan" },
    { nb: 3, step: "step3", titre: "add-ons" },
    { nb: 4, step: "step4", titre: "summary" }
  ])



  //Function
  const [valueUn, setValueun] = useState('')
  const [valueDeux, setValuedeux] = useState('')
  const [valueTrois, setValuetrois] = useState('')


  const [arcade, setArcade] = useState(9)
  const [advenced, setAdvenced] = useState(12)
  const [pro, setPro] = useState(15)
  const [tmp, setTmp] = useState('/mo')



  const [active1, setActive1] = useState('block')
  const [active2, setActive2] = useState('hidden')
  const [active3, setActive3] = useState('hidden')
  const [active4, setActive4] = useState('hidden')

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

    transition === "translate-x-0" ? setChoixNb(choixNb*10) : setChoixNb(choixNb/10)
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


  const zz = document.querySelectorAll('.test')


  // SUIVANT
  // Premier next
  const next = () => {
    setActive1('hidden')
    setActive2('block')

    setNav(nav)

    zz.forEach(element => {
      element.classList.remove('bgNb')
      zz[1].classList.add('bgNb')
    });




  }

  // Deuxieme next et back
  const next2 = () => {
    setActive2('hidden')
    setActive3('block')

    zz.forEach(element => {
      element.classList.remove('bgNb')
      zz[2].classList.add('bgNb')
    });

  }
  const back2 = () => {
    setActive1('block')
    setActive2('hidden')
    setActive4('hidden')

    zz.forEach(element => {
      element.classList.remove('bgNb')
      zz[0].classList.add('bgNb')
    });

  }

  // Deuxieme next et back
  const next3 = () => {
    setActive3('hidden')
    setActive4('block')

    zz.forEach(element => {
      element.classList.remove('bgNb')
      zz[3].classList.add('bgNb')
    });

  }
  const back3 = () => {
    setActive1('hidden')
    setActive2('block')
    setActive3('hidden')
    setActive4('hidden')

    zz.forEach(element => {
      element.classList.remove('bgNb')
      zz[1].classList.add('bgNb')
    });

  }


  const change = () => {
    setActive2('block')
    setActive4('hidden')

    zz.forEach(element => {
      element.classList.remove('bgNb')
      zz[1].classList.add('bgNb')
    });

  }





  return (
    <div className="Idriss">
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <div className="w-[60%]  bg-white flex p-3 rounded-xl">

          <Sidebar />



          <div className="w-[70%]  h-full bg-white pt-10 px-20  ">

            <Cmp1 un={un} deux={deux} trois={trois} next={next} active1={active1} valueUn={valueUn} valueDeux={valueDeux} valueTrois={valueTrois} />

            <Cmp2 active2={active2} card1={card1} card2={card2} card3={card3} bgCard1={bgCard1} bgCard2={bgCard2} bgCard3={bgCard3} next2={next2} back2={back2} arcade={arcade} pro={pro} advenced={advenced} tmp={tmp} trans={trans} transition={transition} img1={img1} img2={img2} img3={img3} mois={mois} year={year} />

            <Adil choix={choix} change={change} choixNb={choixNb}
              choixTmp={choixTmp} tmp={tmp} active4={active4} />

            <Yassine active3={active3} next3={next3} back3={back3} />

















          </div >

        </div>

      </div >
    </div >

  )

}

export default Idriss