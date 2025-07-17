import React from 'react'
import Service1 from "../assets/Service1.png"
import Service2 from "../assets/Service2.png"
import Service3 from "../assets/Service3.png"
import Service4 from "../assets/Service4.png"
const Gallery = () => {
  return (
<section>
<div className="flex justify-between flex-wrap w-full">
    <div className="lg:w-[24%]  mt-3">
        <img src={Service1} alt=''/>
    </div>
    <div className="lg:w-[24%] mt-3">
         <img src={Service2} alt=''/>
    </div>
    <div className="lg:w-[24%] mt-3 ">
         <img src={Service3} alt=''/>
    </div>
    <div className="lg:w-[24%]  mt-3">
          <img src={Service4} alt=''/>
    </div>
</div> 
</section>


  )
}

export default Gallery