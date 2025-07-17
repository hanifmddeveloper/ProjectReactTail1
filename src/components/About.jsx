import React from 'react'
import Comp from "../assets/comp.png"
const About = () => {
  return (
    <section>
     <container>   
      <div className="flex py-[136px] justify-center">
        <div className="w-2/12">
        <h2 className='font-pops font-bold text-[36px] h-[335px] w-[230px] bg-[red] text-white pt-[100px]'>Learn more about our company</h2></div>
        <div className="w-6/12">
          <img src={Comp} alt=''/>
        </div>
      </div>
    </container>
   </section>
  )
}

export default About