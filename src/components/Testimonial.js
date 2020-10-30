import React from 'react';
import {useSelector} from 'react-redux';

function Testimonial() {

  const testimonials = useSelector(state => state.testimonials.list);

  return (
    <div className="testimonial_area section_gap_bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="main_title">
              <h2>client say about me</h2>
              <p>Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast <br/>
                beginning signs open god you're gathering ithe</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="testi_slider owl-carousel">
            { 
              testimonials.map((testimonial) =>
                <div className="testi_item" key={testimonial.id}>
                  <div className="row">
                    <div className="col-lg-4">
                      <img src={testimonial.img} alt=""/>
                    </div>
                    <div className="col-lg-8">
                      <div className="testi_text">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
            )}            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;