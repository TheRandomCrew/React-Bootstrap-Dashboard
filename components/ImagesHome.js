import React from 'react';
import ReactDOM from 'react-dom';

class ImagesHome extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
			
			};
	}

	render () {

		return 	(
				<div className="ImagesHome">
					<div className="">
						<figure className="ImagesHome-figure">
							<img src="/static/img/negocio.svg" alt=""/>
						</figure>
					</div>

					<style jsx global>{`

						.ImagesHome {
							width: 40%;
							box-shadow: -1px 4px 25px 5px rgba(228,55,118,0.08);
							margin-left: 10px;
							padding: 20px 0;
						}

						.ImagesHome h1 {
							font-size: 40px;
							color: #35477d;
						}


						@keyframes emma {
							0% {
								background-position: 0px 0px;
							}
							100% {
								background-position: 10000px 0px;
							}
						}

					`}</style>
				</div>
		);
	}
}

export default ImagesHome;