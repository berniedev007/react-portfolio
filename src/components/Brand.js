import React from 'react';
import {useSelector} from 'react-redux';

function Brand() {
  
  const brands = useSelector(state => state.brands.list);

  return (
    <section className="brand_area section_gap_bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="row">
            { 
              brands.map((brand) =>
                <div className="col-lg-4 col-md-4 col-sm-6" key={brand.id}>
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src={brand.img} alt="" />
                    </div>
                  </div>
                </div>
            )}												
            </div>
          </div>
          <div className="offset-lg-2 col-lg-4 col-md-6">
            <div className="client-info">
              <div className="d-flex mb-50">
                <span className="lage">10</span>
                <span className="smll">Years Experience Working</span>
              </div>
              <div className="call-now d-flex">
                <div>
                  <span className="fa fa-phone"></span>
                </div>
                <div className="ml-15">
                  <p>call us now</p>
                  <h3>(+1)-800-555-6789</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand;