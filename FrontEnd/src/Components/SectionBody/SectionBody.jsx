import React from 'react'
import SectionBodyLeft from '../SectionBodyLeft/SectionBodyLeft'
import SectionBodyRight from './../SectionBodyRight/SectionBodyRight';
import "./SectionBody.scss"
const SectionBody = () => {
  return (
    <div className='section-body'>
        <SectionBodyLeft />
        <SectionBodyRight />
    </div>
  )
}

export default SectionBody