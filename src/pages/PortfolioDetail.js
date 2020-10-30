import React from 'react';

import Layout from '../components/Common/Layout';
import Banner from '../components/Banners/CommonBanner';
import PortfolioDetail from '../components/Portfolioes/PortfolioDetail';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Common/Footer';

function PortfolioDetailPage(props) {
  
  const portfolioId = parseInt(props.match.params.id);

  return (
    <Layout>
      <Banner title={'Potfolio Detail'} link={'/potfolio/' + portfolioId} />
      <PortfolioDetail portfolioId={portfolioId}/>
      <Newsletter />      
      <Footer />
    </Layout>
  )
}

export default PortfolioDetailPage;