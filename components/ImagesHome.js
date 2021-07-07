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
					<div className="videoWrapper">
						<figure className="ImagesHome-figure" style={{display: "none"}}>
							<img src="/static/img/negocio.svg" alt=""/>
						</figure>
						<iframe width="" height="" src="https://www.youtube.com/embed/M9iDEkoxLAU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>

					<style jsx global>{`

						.ImagesHome {
							width: 40%;
							box-shadow: -1px 4px 25px 5px rgba(228,55,118,0.08);
							margin-left: 10px;
							padding: 10px;
						}

						.ImagesHome h1 {
							font-size: 40px;
							color: #35477d;
						}

						.videoWrapper {
							position: relative;
							padding-bottom: 56.25%; /* 16:9 */
							padding-top: 25px;
							height: 0;
						}
						.videoWrapper iframe {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
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