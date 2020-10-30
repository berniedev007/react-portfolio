import React from 'react';

import Layout from '../components/Common/Layout';
import Header from '../components/Common/Header';
import BlogDetail from '../components/Blogs/BlogDetail';
import Banner from '../components/Banners/CommonBanner';
import Footer from '../components/Common/Footer';

function BlogDetailPage(props) {
  const blogId = parseInt(props.match.params.id);
  return (
    <Layout>
      <Header />
      <Banner title={'Blog Detail'} link={'/blog/' + blogId}/>
      <BlogDetail blogId={blogId}/>
      <Footer />
    </Layout>    
  )
}

export default BlogDetailPage;