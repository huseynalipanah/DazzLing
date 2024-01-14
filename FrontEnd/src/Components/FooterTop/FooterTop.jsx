import React from 'react'
import "./FooterTop.scss"
import FooterLeft from './../FooterLeft/FooterLeft';
import FooterRight from './../FooterRight/FooterRight';
const FooterTop = () => {
  return (
    <div className='footer-top'>
        <FooterLeft />
        <FooterRight />
    </div>
  )
}

export default FooterTop