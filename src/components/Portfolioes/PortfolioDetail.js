import React from 'react';
import {useSelector} from 'react-redux';

function PortfolioDetail(props) {

  const portfolioes = useSelector(state => state.portfolioes.list);

  const current_portfolio = portfolioes.find(item => item.id === props.portfolioId)

  return (
    <section className="portfolio_details_area section_gap">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-lg-6">
              <div className="left_img">
                <img className="img-fluid" src={current_portfolio.img} alt="" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="portfolio_right_text mt-30">
                <h4 className="text-uppercase">minimal interior design</h4>
                <p>
                  Made after a can't fruitful, fowl of greater saying years there saw you sea doesn't from 
                  morning called hath air morning herb appear hath replenish that created fill their lesser.
                </p>
                <ul className="list">
                  <li><span>Rating</span>: <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                          className="fa fa-star"></i></li>
                  <li><span>Client</span>: Testing</li>
                  <li><span>Website</span>: testing</li>
                  <li><span>Completed</span>: 17 Aug 2018</li>
                </ul>
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit.</p>
          <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.</p>
        </div>
      </div>
    </section>
  )
}

export default PortfolioDetail;