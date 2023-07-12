import React from 'react'

function NavLinks({top}) {
  return (
    <div className={` fixed flex flex-col  justify-center items-center transition duration-300 ${top} 
    w-full h-[100vh] bg-slate-300 absolute top-[80px] overflow-scroll text-left`}>
    <ul className="w-full h-full flex flex-col items-center ">
      <li className="w-full text-center">
        <a  href="/" className="text-2xl hover:bg-orange-300 hover:text-white font-semibold block w-full cursor-pointer  py-6">Home</a>
      </li>
      <li className="w-full text-center">
        <a href="/" className="text-2xl  font-semibold hover:bg-orange-300 hover:text-white block w-full cursor-pointer  py-6">About</a>
      </li>
      <li className="w-full text-center">
        <a href="/" className="text-2xl  font-semibold hover:bg-orange-300 hover:text-white block w-full cursor-pointer  py-6">Motorbikes</a>
      </li>
      <li className="w-full text-center">
        <a href="/" className="text-2xl  font-semibold hover:bg-orange-300 hover:text-white block w-full cursor-pointer  py-6">Quad ATVS</a>
      </li>
      <li className="w-full text-center">
        <a href="/" className="text-2xl  font-semibold hover:bg-orange-300 hover:text-white block w-full cursor-pointer  py-6">Location</a>
      </li>
      <li className="w-full text-center">
        <a href="/" className="text-2xl  font-semibold hover:bg-orange-300 hover:text-white block w-full cursor-pointer  py-6">Contact</a>
      </li>
    </ul> 
     


    </div>
  )
}

export default NavLinks