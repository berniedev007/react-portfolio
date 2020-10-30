import React from 'react';

function Newsletter() {
  return (
    <section className="newsletter_area">
		<div className="container">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-12">
					<div className="subscription_box text-center">
						<h2 className="text-uppercase text-white">get update from anywhere</h2>
						<p className="text-white">
							Bearing Void gathering light light his eavening unto dont afraid. 
						</p>
						<div className="subcribe-form" id="mc_embed_signup">
							<form className="subscription relative">
								<input name="EMAIL" placeholder="Email address" type="email"/>
								<div style={{position: 'absolute', left: '-5000px'}}>
									<input type="text" />
								</div>
								<button className="primary-btn hover d-inline">Get Started</button>
								<div className="info"></div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Newsletter;