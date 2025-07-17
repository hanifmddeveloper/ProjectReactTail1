import React from 'react'
import Container from './Container'
import Comp2 from "../assets/comp2.png"



const Company = () => {
  return (
   <section>
    <Container >
        <div className='flex py-[150px] w-[900px] mx-auto justify-around' >
            <div className='w-2/12' >
            <div className='flex' >
            <img src={Comp2} alt=''/>
            <h2>PETROMAX</h2>
            </div>
            </div>
            <div className='w-2/12' >
             <div className='flex' >
            <img src={Comp2} alt=''/>
            <h2>Thevron</h2>
            </div>
            </div>
            <div className='w-2/12' >
             <div className='flex' >
            <img src={Comp2} alt=''/>
            <h2>BARCOO</h2>
            </div>
            </div>
            <div className='w-2/12'>
             <div className='flex' >
            <img src={Comp2} alt=''/>
            <h2>BioSool</h2>
            </div>
            </div>
        </div>
    </Container>
   </section>
  )
}

export default Company
