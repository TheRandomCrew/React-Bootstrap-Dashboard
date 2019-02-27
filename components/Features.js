import React from 'react';
import ReactDOM from 'react-dom';

class Features extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
			
			};
	}

	render () {

		return 	(
				<div className="Features">
					<div className="FeaturesContainer">
						<h1>FEATURES</h1>
						<ul>
							<li>
								<a href="">
									<img src="/static/img/sand-clock.png" alt=""/>
									<p>Real Time</p>
								</a>
							</li>
							<li>
								<a href="">
									<img src="/static/img/forefinger.png" alt=""/>
									<p>Add Lizad Spock for more fun</p>
								</a>
							</li>
							<li>
								<a href="">
									<img src="/static/img/smartphone.png" alt=""/>
									<p>Social Chat</p>
								</a>
							</li>
							<li>
								<a href="">
									<img src="/static/img/sand-clock.png" alt=""/>
									<p>Other</p>
								</a>
							</li>
						</ul>
					</div>

					<style jsx global>{`

						.Features {
							width: 100%;
							margin-bottom: 40px;
							color: #35477d;
						}

						.FeaturesContainer {
							padding: 30px 0;
							display: flex;
							box-shadow: -1px 4px 25px 5px rgba(228,55,118,0.08);
							justify-content: center;
							align-items: center;
							flex-direction: column;
							height: 100%;
							max-width: 1200px;
							width: 80%;
							margin: auto;
						}

						.Features h1 {
							font-size: 40px;
						}

						.Features ul {
							display: flex;
							justify-content: space-evenly;
							align-items: center;
							width: 100%;
						}

						.Features li {
							text-align: center;
							margin-top: 20px;
							margin-bottom: 10px;
						}

						.Features li:hover img {
							transform: scale(1.5);
						}

						.Features li:hover p {
							color: #6c5b7b;
						}

						.Features p {
							text-align: center;
							margin-top: 20px;
							margin-bottom: 10px;
							color: #f67280;
						}

						.Features img {
							max-width: 50px;
							margin: 20px auto;
							transform: scale(1.1);
							transition: .2s linear;
						}

					`}</style>
				</div>
		);
	}
}

export default Features;