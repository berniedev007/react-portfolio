import React from 'react';

import Layout from '../components/Common/Layout';
import Banner from '../components/Banners/CommonBanner';
import Feature from '../components/Feature';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Common/Footer';

function Services() {
  return (
    <Layout>
      <Banner title={'Services'} link={'/services'}/>  
      <Feature />
      <Testimonial />
      <Newsletter />
      <Footer />
    </Layout>    
  )
}

export default Services;