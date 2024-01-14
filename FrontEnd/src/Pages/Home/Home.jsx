import React from 'react';
import { Helmet } from 'react-helmet-async';
import DownloadNow from '../../Components/DownloadNow/DownloadNow';
import HeaderSlider from '../../Components/HeaderSlider/HeaderSlider';
import SectionBody from './../../Components/SectionBody/SectionBody';

const Home = () => {
  return (<>
  <Helmet>
    <title>Home</title>
  </Helmet>
    <div className='home'>
      <HeaderSlider />
      <DownloadNow/>
      <SectionBody />
    </div>
    </>
  )
}

export default Home