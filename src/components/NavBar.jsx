import { useState } from "react"
import NavLinks from "./NavLinks"


function NavBar() {
  const [clicked, setClicked]= useState("left-[-100%]");
  return (
    <div className="w-full fixed z-50 items-center justify-between h-[60px] md:h-[80px] flex bg-orange-400">
         <div className=" ml-2 md:ml-12 text-white font-['Segoe UI']">
           <h2 className="text-md font-bold"> ACROPOLIS MOTORBIKES</h2>
           <h3 className="hidden md:block">Since 1989</h3>
         </div>   
         
         <button onClick={()=>{
          (clicked === "left-0") ? setClicked("left-[100%]") : setClicked("left-0");
         }} className=" cursor-pointer h-full w-[50px] md:mr-12 flex flex-col items-center justify-center burger">
         <span className="w-6 h-[3px] bg-white block mt-[6px] rounded-md"></span>
         <span className="w-6 h-[3px] bg-white block mt-[6px] rounded-md"></span>
         <span className="w-6 h-[3px] bg-white block mt-[6px] rounded-md"></span>
         </button>
          
         <NavLinks top={clicked}/>
         
    
    </div>
  )
}

export default NavBar