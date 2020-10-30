import React from 'react';
import BlogRightSidebar from './BlogRightSidebar';

import FeatureImg1 from '../../assets/img/blog/post-img1.jpg';
import FeatureImg2 from '../../assets/img/blog/post-img2.jpg';

// import BlogPrevImg from '../../assets/img/blog/prev.jpg';
// import BlogNextImg from '../../assets/img/blog/next.jpg';

// import Blog1 from '../../assets/img/blog/c1.jpg';
// import Blog2 from '../../assets/img/blog/c2.jpg';
// import Blog3 from '../../assets/img/blog/c3.jpg';
// import Blog4 from '../../assets/img/blog/c4.jpg';
// import Blog5 from '../../assets/img/blog/c5.jpg';

import {useSelector} from 'react-redux';

function BlogDetail(props) {

  const blogs = useSelector(state => state.blogs.list);

  const current_blog = blogs.find(item => item.id === props.blogId);

  return (
    <section className="blog_area single-post-area section_gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 posts-list">
                    <div className="single-post row">
                        <div className="col-lg-12">
                            <div className="feature-img">
                                <img className="img-fluid" src={current_blog.img} alt=""/>
                            </div>									
                        </div>
                        <div className="col-lg-3  col-md-3">
                            <div className="blog_info text-right">
                                <div className="post_tag">
                                  <a className="active" href="/">{current_blog.category}</a>
                                </div>
                                <ul className="blog_meta list">
                                    <li><a href="/">{current_blog.name}<i className="lnr lnr-user"></i></a></li>
                                    <li><a href="/">{current_blog.date}<i className="lnr lnr-calendar-full"></i></a></li>
                                    <li><a href="/">{current_blog.count_views} Views<i className="lnr lnr-eye"></i></a></li>
                                    <li><a href="/">{current_blog.comment} Comments<i className="lnr lnr-bubble"></i></a></li>
                                </ul>
                                <ul className="social-links">
                                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fa fa-github"></i></a></li>
                                    <li><a href="/"><i className="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 blog_details">
                            <h2>Astronomy Binoculars A Great Alternative</h2>
                            <p className="excert">
                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                            </p>
                            <p>
                                Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                            </p>
                            <p>
                                Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                            </p>
                        </div>
                        <div className="col-lg-12">
                            <div className="quotes">
                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.										
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <img className="img-fluid" src={FeatureImg1} alt=""/>
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid" src={FeatureImg2} alt=""/>
                                </div>	
                                <div className="col-lg-12 mt-25">
                                    <p>
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                                    </p>
                                    <p>
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                                    </p>											
                                </div>									
                            </div>
                        </div>
                    </div>
                    {/*
                    <div className="navigation-area">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                          <div className="thumb">
                            <a href="/"><img className="img-fluid" src={BlogPrevImg} alt=""/></a>
                          </div>
                          <div className="arrow">
                            <a href="/"><span className="lnr text-white lnr-arrow-left"></span></a>
                          </div>
                          <div className="detials">
                            <p>Prev Post</p>
                            <a href="/"><h4>Space The Final Frontier</h4></a>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                          <div className="detials">
                            <p>Next Post</p>
                            <a href="/"><h4>Telescopes 101</h4></a>
                          </div>
                          <div className="arrow">
                            <a href="/"><span className="lnr text-white lnr-arrow-right"></span></a>
                          </div>
                          <div className="thumb">
                            <a href="/"><img className="img-fluid" src={BlogNextImg} alt="" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div className="comments-area">
                        <h4>05 Comments</h4>
                        <div className="comment-list">
                            <div className="single-comment justify-content-between d-flex">
                                <div className="user justify-content-between d-flex">
                                    <div className="thumb">
                                        <img src={Blog1} alt="" />
                                    </div>
                                    <div className="desc">
                                        <h5><a href="/">Emilly Blunt</a></h5>
                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                        <p className="comment">
                                            Never say goodbye till the end comes!
                                        </p>
                                    </div>
                                </div>
                                <div className="reply-btn">
                                        <a href="/" className="btn-reply text-uppercase">reply</a> 
                                </div>
                            </div>
                        </div>	
                        <div className="comment-list left-padding">
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb">
                                <img src={Blog2} alt=""/>
                              </div>
                              <div className="desc">
                                <h5><a href="/">Elsie Cunningham</a></h5>
                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                <p className="comment">
                                    Never say goodbye till the end comes!
                                </p>
                              </div>
                            </div>
                            <div className="reply-btn">
                              <a href="/" className="btn-reply text-uppercase">reply</a> 
                            </div>
                          </div>
                        </div>	
                        <div className="comment-list left-padding">
                            <div className="single-comment justify-content-between d-flex">
                                <div className="user justify-content-between d-flex">
                                    <div className="thumb">
                                        <img src={Blog3} alt=""/>
                                    </div>
                                    <div className="desc">
                                        <h5><a href="/">Annie Stephens</a></h5>
                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                        <p className="comment">
                                            Never say goodbye till the end comes!
                                        </p>
                                    </div>
                                </div>
                                <div className="reply-btn">
                                        <a href="/" className="btn-reply text-uppercase">reply</a> 
                                </div>
                            </div>
                        </div>	
                        <div className="comment-list">
                            <div className="single-comment justify-content-between d-flex">
                                <div className="user justify-content-between d-flex">
                                    <div className="thumb">
                                        <img src={Blog4} alt=""/>
                                    </div>
                                    <div className="desc">
                                        <h5><a href="/">Maria Luna</a></h5>
                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                        <p className="comment">
                                            Never say goodbye till the end comes!
                                        </p>
                                    </div>
                                </div>
                                <div className="reply-btn">
                                        <a href="/" className="btn-reply text-uppercase">reply</a> 
                                </div>
                            </div>
                        </div>	
                        <div className="comment-list">
                            <div className="single-comment justify-content-between d-flex">
                                <div className="user justify-content-between d-flex">
                                    <div className="thumb">
                                        <img src={Blog5} alt=""/>
                                    </div>
                                    <div className="desc">
                                        <h5><a href="/">Ina Hayes</a></h5>
                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                        <p className="comment">
                                            Never say goodbye till the end comes!
                                        </p>
                                    </div>
                                </div>
                                <div className="reply-btn">
                                        <a href="/" className="btn-reply text-uppercase">reply</a> 
                                </div>
                            </div>
                        </div>	                                             				
                    </div>
                    <div className="comment-form">
                        <h4>Leave a Reply</h4>
                        <form>
                            <div className="form-group form-inline">
                                <div className="form-group col-lg-6 col-md-6 name">
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                                </div>
                                <div className="form-group col-lg-6 col-md-6 email">
                                <input type="email" className="form-control" id="email" placeholder="Enter email address" />
                                </div>										
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege" ></textarea>
                            </div>
                            <a href="/" className="primary-btn primary_btn"><span>Post Comment</span></a>	
                        </form>
                    </div> */}
                </div>
                <div className="col-lg-4">
                  <BlogRightSidebar />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogDetail;