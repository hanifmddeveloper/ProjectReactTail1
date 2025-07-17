import React from 'react'
import Group1 from "../assets/Group1.png" 
import Group2 from "../assets/Group2.png" 
import Group3 from "../assets/Group3.png" 

const Group = () => {
  return (
   <section>
    <container>
        <div className=' flex bg-companyColor py-[150px] w-[900px] mx-auto gap-3' >
            <div className='w-4/12' >
            <div className='' >
            <img src={Group1} alt=''/>
            </div>
            </div>
            <div className='w-4/12' >
             <div className='' >
            <img src={Group2} alt=''/>
            </div>
            </div>
            <div className='w-4/12' >
             <div className='' >
            <img src={Group3} alt=''/>
            </div>
            </div>
         </div>
    </container>
   </section>
  )
}

export default Group
