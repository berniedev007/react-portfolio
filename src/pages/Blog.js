import React from 'react';

import Layout from '../components/Common/Layout';
import Banner from '../components/Banners/CommonBanner';
import BlogCategory from '../components/Blogs/BlogCategory';
import BlogList from '../components/Blogs/BlogList';
import Footer from '../components/Common/Footer';

function Blog() {
  return (
    <Layout>
      <Banner title={'Blog'} link={'/blog'}/>
      <BlogCategory />
      <BlogList />
      <Footer />  
    </Layout>    
  )
}

export default Blog;