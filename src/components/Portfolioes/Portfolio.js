import React from 'react';
import {useSelector} from 'react-redux';

function Portfolio() {

  const portfolioes = useSelector(state => state.portfolioes.list);

  const classNames = (classes) => {
    return classes.toString().split(',').join(' ');
  }

  return (
    <section className="portfolio_area" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main_title text-center">
              <h2>quality work <br/>
                Recently done project </h2>
            </div>
          </div>
        </div>
        <div className="filters portfolio-filter">
          <ul>
            <li className="active" data-filter="*">all</li>
            <li data-filter=".popular">popular</li>
            <li data-filter=".latest"> latest</li>
            <li data-filter=".following">following</li>
            <li data-filter=".upcoming">upcoming</li>
          </ul>
        </div>
	
        <div className="filters-content">
          <div className="row portfolio-grid justify-content-center">
            { 
              portfolioes.map((portfolio) =>
                <div className={`col-lg-4 col-md-6 all ` + classNames(portfolio.types)} key={portfolio.id}>
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img className="img-fluid w-100" src={portfolio.img} alt="" />
                      <div className="overlay"></div>
                      <a href={portfolio.img} className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross"></span>
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4><a href={`/portfolio/` + portfolio.id}>{portfolio.title}</a></h4>
                      <p>{portfolio.description}</p>
                    </div>
                  </div>
                </div>
            )}                        
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;