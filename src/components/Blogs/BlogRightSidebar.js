import React from 'react';
import {useSelector} from 'react-redux';

function BlogRightSidebar() {

  const posts = useSelector(state => state.posts.list);
  const post_categories = useSelector(state => state.posts.categories);
  
  return (
    <div className="blog_right_sidebar">
      <aside className="single_sidebar_widget search_widget">
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search Posts" />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier"></i></button>
            </span>
        </div>
        <div className="br"></div>
      </aside>
      <aside className="single_sidebar_widget author_widget">
        <img className="author_img rounded-circle" src="img/blog/author.png" alt="" />
        <h4>Charlie Barber</h4>
        <p>Senior blog writer</p>
        <div className="social_icon">
            <a href="/"><i className="fa fa-facebook"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-github"></i></a>
            <a href="/"><i className="fa fa-behance"></i></a>
        </div>
        <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
        <div className="br"></div>
      </aside>
      <aside className="single_sidebar_widget popular_post_widget">
        <h3 className="widget_title">Popular Posts</h3>
        { 
          posts.map((post) =>
            <div className="media post_item" key={post.id}>
              <img src={post.img} alt="post" />
              <div className="media-body">
                  <a href="/"><h3>{post.title}</h3></a>
                  <p>{post.time}</p>
              </div>
            </div>
        )}
        <div className="br"></div>
      </aside>
      <aside className="single_sidebar_widget ads_widget">
        <a href="/"><img className="img-fluid" src="img/blog/add.jpg" alt="" /></a>
        <div className="br"></div>
      </aside>
      <aside className="single_sidebar_widget post_category_widget">
        <h4 className="widget_title">Post Catgories</h4>
        <ul className="list cat-list">
          { 
            post_categories.map((category) =>
              <li key={category.id}>
                <a href="/" className="d-flex justify-content-between">
                  <p>{category.name}</p>
                  <p>{category.count}</p>
                </a>
              </li>
          )}                                                            														
        </ul>
        <div className="br"></div>
      </aside>
      <aside className="single-sidebar-widget newsletter_widget">
          <h4 className="widget_title">Newsletter</h4>
          <p>Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>
          <div className="form-group d-flex flex-row">
              <div className="input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                  </div>
                  <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email" />
              </div>
              <a href="/" className="bbtns">Subcribe</a>
          </div>	
          <p className="text-bottom">You can unsubscribe at any time</p>	
          <div className="br"></div>							
      </aside>
      <aside className="single-sidebar-widget tag_cloud_widget">
          <h4 className="widget_title">Tag Clouds</h4>
          <ul className="list">
            <li><a href="/">Technology</a></li>
            <li><a href="/">Fashion</a></li>
            <li><a href="/">Architecture</a></li>
            <li><a href="/">Fashion</a></li>
            <li><a href="/">Food</a></li>
            <li><a href="/">Technology</a></li>
            <li><a href="/">Lifestyle</a></li>
            <li><a href="/">Art</a></li>
            <li><a href="/">Adventure</a></li>
            <li><a href="/">Food</a></li>
            <li><a href="/">Lifestyle</a></li>
            <li><a href="/">Adventure</a></li>
          </ul>
      </aside>
  </div>
  )
}

export default BlogRightSidebar;