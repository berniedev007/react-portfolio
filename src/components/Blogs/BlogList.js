import React from 'react';
import {useSelector} from 'react-redux';
import BlogRightSidebar from './BlogRightSidebar';

function BlogList() {

  const blogs = useSelector(state => state.blogs.list);

  return (
    <section className="blog_area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog_left_sidebar">
                        { 
                          blogs.map((item) =>
                            <article className="row blog_item" key={item.id}>
                              <div className="col-md-3">
                                  <div className="blog_info text-right">
                                      <div className="post_tag">
                                        <a href="/" className="active">{item.category}</a>                                          
                                      </div>
                                      <ul className="blog_meta list">
                                        <li><a href="/">{item.name}<i className="lnr lnr-user"></i></a></li>
                                        <li><a href="/">{item.date}<i className="lnr lnr-calendar-full"></i></a></li>
                                        <li><a href="/">{item.count_views} Views<i className="lnr lnr-eye"></i></a></li>
                                        <li><a href="/">{item.comment} Comments<i className="lnr lnr-bubble"></i></a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-md-9">
                                  <div className="blog_post">
                                      <img src={item.img} alt="" />
                                      <div className="blog_details">
                                          <a href={`/blog/` + item.id}><h2>{item.title}</h2></a>
                                          <p>{item.description}</p>
                                          <a href={`/blog/` + item.id} className="primary_btn"><span>View More</span></a>
                                      </div>
                                  </div>
                              </div>
                          </article>
                        )}                                                 
                        <nav className="blog-pagination justify-content-center d-flex">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a href="/" className="page-link" aria-label="Previous">
                                        <span aria-hidden="true">
                                            <span className="lnr lnr-chevron-left"></span>
                                        </span>
                                    </a>
                                </li>
                                <li className="page-item"><a href="/" className="page-link">01</a></li>
                                <li className="page-item active"><a href="/" className="page-link">02</a></li>
                                <li className="page-item"><a href="/" className="page-link">03</a></li>
                                <li className="page-item"><a href="/" className="page-link">04</a></li>
                                <li className="page-item"><a href="/" className="page-link">09</a></li>
                                <li className="page-item">
                                    <a href="/" className="page-link" aria-label="Next">
                                        <span aria-hidden="true">
                                            <span className="lnr lnr-chevron-right"></span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-4">
                  <BlogRightSidebar />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogList;