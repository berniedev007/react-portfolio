import React from 'react';

function CommonBanner(props) {
  return (
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content text-center">
            <h2>{props.title}</h2>
            <div className="page_link">
                <a href="/">Home</a>
                <a href={props.link}>{props.title}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommonBanner;