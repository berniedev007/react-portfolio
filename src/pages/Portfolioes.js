import React from 'react';

import Layout from '../components/Common/Layout';
import Banner from '../components/Banners/CommonBanner';
import Portfolio from '../components/Portfolioes/Portfolio';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Common/Footer';

function Portfolioes() {
  return (
    <Layout>
      <Banner title={'Portfolio'} link={'/portfolio'}/>     
      <Portfolio />
      <Newsletter />
      <Footer />
    </Layout>    
  )
}

export default Portfolioes;