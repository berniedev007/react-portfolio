import React from 'react';
import {useSelector} from 'react-redux';

function Feature() {
  
  const services = useSelector(state => state.services.list);

  return (
    <section className="features_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="main_title">
              <h2>service offers </h2>
              <p>
                Is give may shall likeness made yielding spirit a itself togeth created 
                after sea <br/> is in beast beginning signs open god you're gathering ithe
              </p>
            </div>
          </div>
        </div>
        <div className="row feature_inner">
          { 
            services.map((service) =>
              <div className="col-lg-3 col-md-6" key={service.id}>
                <div className="feature_item">
                  <img src={service.img} alt="" />
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
          )}
        </div>
      </div>
	  </section>
  )
}

export default Feature;