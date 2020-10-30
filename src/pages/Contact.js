import React from 'react';

import Layout from '../components/Common/Layout';
import Banner from '../components/Banners/CommonBanner';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Common/Footer';

function Contact() {
  return (
    <Layout>
      <Banner title={'Contact Us'} link={'/contact'}/>
      <ContactContent />
      <Footer />  
    </Layout>    
  )
}

export default Contact;