import React from 'react';

import Layout from '../components/Common/Layout';
import Banner from '../components/Banners/HomeBanner';
import About from '../components/About';
import Brand from '../components/Brand';
import Feature from '../components/Feature';
import Portfolio from '../components/Portfolioes/Portfolio';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Common/Footer';

function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <Brand />
      <Feature />
      <Portfolio />
      <Testimonial />
      <Newsletter />
      <Footer />
    </Layout>    
  )
}

export default Home;