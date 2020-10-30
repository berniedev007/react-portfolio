import React from 'react';

import Layout from '../components/Common/Layout';
import Banner from '../components/Banners/CommonBanner';
import About from '../components/About';
import Brand from '../components/Brand';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Common/Footer';

function AboutUs() {
  return (
    <Layout>
      <Banner title={'About Us'} link={'/about-us'}/>
      <About />
      <Brand />
      <Testimonial />
      <Newsletter />
      <Footer />
    </Layout>
  )
}

export default AboutUs;