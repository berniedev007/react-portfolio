import React from 'react';
import {useSelector} from 'react-redux';

function BlogCategory() {
  
  const categories = useSelector(state => state.blogs.categories);

  return (
    <section className="blog_categorie_area section_gap_top">
        <div className="container">
            <div className="row">
              { 
                categories.map((category) =>
                  <div className="col-lg-4" key={category.id}>
                    <div className="categories_post">
                        <img src={category.img} alt="post" />
                        <div className="categories_details">
                            <div className="categories_text">
                                <a href="/"><h5>{category.name}</h5></a>
                                <div className="border_line"></div>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
              )}                            
            </div>
        </div>
    </section>
  )
}

export default BlogCategory;