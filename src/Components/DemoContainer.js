import React from 'react'
import LeftSection from './Left/LeftSection'
import RightSection from './Right/RightSection'


const DemoContainer = () => {
  return (
    <div className='text-white flex p-4 gap-8'>
        <LeftSection/>
        <RightSection/>
    </div>
  )
}

export default DemoContainer