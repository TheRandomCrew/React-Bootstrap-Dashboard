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
							<h1 className="SliderHome-title">
								JUEGA PIEDRA - PAPEL O TIJERA LS Y CHATEA
							</h1>
							<div className="">
								<Slider {...settings}>
									<figure className="item bg2">
										<img src="/static/img/Img-1.svg" alt=""/>
									</figure>
									<figure className="item bg3">
										<img src="/static/img/Img-1.svg" alt=""/>
									</figure>
									<figure className="item bg1">
										<img src="/static/img/Img-1.svg" alt=""/>
									</figure>
								</Slider>
							</div>
						</div>
					</div>

					<style jsx global>{`

						.SliderHome {
							margin-top: 30px;
							overflow: hidden;
							color: #35477d;
						}

						.SliderHome-title {
							font-size: 40px;
							text-align: center;
							margin-bottom: 20px;
						}
						
						
						.SliderHome .slick-slide{
							position: relative;
						}

						.SliderHome .slick-next:before, 
						.SliderHome .slick-prev:before{
							font-size: 50px;
						}

						.SliderHome .slick-next {
							right: 0;
							z-index: 99;
							width: 50px;
							height: 50px;
							transform: scale(1);
	
						}

						.SliderHome .slick-next:hover {
							animation: rubberBand .75s
						}
 
						.SliderHome .slick-prev {
							left: 0;
							z-index: 99;
							right: 50px;
							height: 50px;
							transform: scale(1);
						}
 
						.SliderHome .slick-prev:hover {
							animation: rubberBand .75s
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
							overflow: hidden;
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
							height: 350px;
							background: url(/static/img/Sombra.png) center center repeat;
						}
						.SliderHome-item img {
							width: 100%;
						}
						.SliderHome .item {
							height: 50vh;
						}

						.SliderHome .bg1 {
							background: url(/static/img/piedra.jpg) center center no-repeat;
							background-size: cover;
						}

						.SliderHome .bg2 {
							background: url(/static/img/juego.jpg) center center no-repeat;
							background-size: cover;
						}

						.SliderHome .bg3 {
							background: url(/static/img/game.jpg) center center no-repeat;
							background-size: cover;
						}

						@keyframes rubberBand {
						    from {
						        transform: scale3d(1,1,1)
						    }

						    30% {
						        transform: scale3d(1.25,.75,1)
						    }

						    40% {
						        transform: scale3d(.75,1.25,1)
						    }

						    50% {
						        transform: scale3d(1.15,.85,1)
						    }

						    65% {
						        transform: scale3d(.95,1.05,1)
						    }

						    75% {
						        transform: scale3d(1.05,.95,1)
						    }

						    to {
						        transform: scale3d(1,1,1)
						    }
						}

					`}</style>
				</div>
		);
	}
}

export default SliderHome;