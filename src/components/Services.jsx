import React from 'react'
import Gal1 from "../assets/Gal1.png"
import Gal2 from "../assets/Gal2.png"
import Gal3 from "../assets/Gal3.png"
const Services = () => {
  return (
   <section>
    <div className=" lg:flex mt-5">
        <div className="w-6/12 lg:px-[220px] pt-10">
        <h1 className='font-pops font-bold lg:text-[64px] text-[28px] lg:w-[509px]' >Our Services</h1>
        <p className='font-pops text-[16px] font-medium text-[#000] w-[405px]' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="w-6/12">
         <img src={Gal1} alt=''/>
        </div>
    </div>
   <div className="lg:flex">
     <div className="w-6/12">
         <img src={Gal2} alt=''/>
        </div>
         <div className="w-6/12">
         <img src={Gal3} alt=''/>
        </div>
    </div> 
 
     
</section>
  )
}

export default Services