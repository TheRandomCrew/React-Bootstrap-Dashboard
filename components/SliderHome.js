import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";

class SliderHome extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
			
			};
	}

	render () {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1
		};

		return 	(
				<div className="">
					<div className="SliderHome">
						<div className="container">
							<Slider {...settings}>
								<figure className="item bg1">
									<img src="/static/img/Img-1.svg" alt=""/>
								</figure>
								<figure className="item bg2">
									<img src="/static/img/Img-1.svg" alt=""/>
								</figure>
								<figure className="item bg3">
									<img src="/static/img/Img-1.svg" alt=""/>
								</figure>
							</Slider>
						</div>
					</div>

					<style jsx global>{`

						.SliderHome {
							margin-top: 30px;
							overflow: hidden;
						}
						
						// .SliderHome .slick-slider:before {
						// 	content: "";
						// 	background: url(/static/img/abajo.png) center center no-repeat;
						// 	background-size: cover;
						// 	position: absolute;
						// 	bottom: -68px;
						// 	left: -10%;
						// 	width: 120%;
						// 	height: 200px;
						// 	z-index: 9;
						// 	pointer-events: none;
						// }

						// .SliderHome .slick-slider:after {
						// 	content: "";
						// 	background: url(/static/img/nubes3.svg) center center no-repeat;
						// 	background-size: cover;
						// 	position: absolute;
						// 	top: -30px;
						// 	left: -10%;
						// 	width: 120%;
						// 	height: 110px;
						// 	z-index: 9;
						// 	pointer-events: none;
						// }
						
						.SliderHome .slick-slide{
							position: relative;
						}
						.SliderHome .slick-slide .item img{
							width: 110%;
							opacity: 0;
							visibility: hidden;
						}
						.SliderHome .slick-dots{
							bottom: 30px;
							z-index: 99;
							height: 5px;
							max-width: 150px;
							left: 0;
							right: 0;
							margin: auto;
						}
						.SliderHome .slick-dots li button:before{
							background: white;
							color: transparent;
							height: 2px;
						}
						.SliderHome-item {
							position: relative;
						}
						.SliderHome-item:before {
							content: "";
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
							height: 340px;
							background: url(/static/img/Sombra.png) center center repeat;
						}
						.SliderHome-item img {
							width: 100%;
						}

						.SliderHome .bg1 {
							background: url(/static/img/Img-1.svg) center center no-repeat;
							background-size: cover;
							max-height: 350px;
						}

						.SliderHome .bg2 {
							background: url(/static/img/Img-2.svg) center center no-repeat;
							background-size: cover;
							max-height: 350px;
						}

						.SliderHome .bg3 {
							background: url(/static/img/Img-3.png) center center no-repeat;
							background-size: cover;
							max-height: 350px;
						}

					`}</style>
				</div>
		);
	}
}

export default SliderHome;