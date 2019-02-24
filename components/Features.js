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
								Real Time
							</li>
							<li>
								Social Chat
							</li>
							<li>
								Add Lizad Spock for more fun
							</li>
							<li>
								Other
							</li>
						</ul>
					</div>

					<style jsx global>{`

						.Features {
							box-shadow: -1px 4px 25px 5px rgba(228,55,118,0.08);
							padding: 30px 0;
							width: 100%;
							margin-bottom: 40px;
						}

						.FeaturesContainer {
							display: flex;
							justify-content: center;
							align-items: center;
							flex-direction: column;
							height: 100%;
						}

						.Features h1 {
							font-size: 40px;
							color: #35477d;
						}

						.Features li {
							text-align: center;
							margin-top: 20px;
							margin-bottom: 10px;
						}

					`}</style>
				</div>
		);
	}
}

export default Features;