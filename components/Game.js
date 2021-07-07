import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
			
			};
	}

	render () {

		return 	(
				<div className="Game">
					<div className="GameContainer">

						<a href="" className="btnRosa">
							PLAY OUR GAME
						</a>
						<div className="Game-register">
							<div className="verifyDates-social">
								<p>Si deseas ingresa con tus <strong>Redes Sociales</strong></p>

								<ul>
									<li className="headerNetworkSocial">
										<a href="">
											<figure className="">
												<img src="/static/img/Group.svg" alt=""/>
											</figure>
										</a>
										<a href="">
											<figure className="">
												<img src="/static/img/vector.svg" alt=""/>
											</figure>
										</a>
										<a href="">
											<figure className="">
												<img src="/static/img/instagram.svg" alt=""/>
											</figure>
										</a>
									</li>
								</ul>

							</div>
						</div>
					</div>

					<style jsx global>{`

						.Game {
							background: url(/static/img/acertijo.png) center center repeat;
							position: relative;
							overflow: hidden;
							animation: emma 100s linear;
							width: 60%;
							box-shadow: -1px 4px 25px 5px rgba(228,55,118,0.08);
							margin-right: 10px;
							padding: 20px 0;
						}

						.GameContainer {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100%;
							flex-direction: column;
						}

						.Game h1 {
							font-size: 40px;
							color: #35477d;
						}

						.btnRosa {
							background: linear-gradient(90deg, #E43776 -4.07%, #E43776 44.81%, #FA5236 103.82%);
							box-shadow: 0px 2px 10px rgba(228, 55, 118, 0.35);
							border-radius: 10px 2px 10px 2px;
							text-align: center;
							line-height: 30px;
							color: white;
							padding: 3px 40px;
							font-family: 'Baloo';
							margin-top: 20px;
							border: none;
							font-size: 17px;
							transform: scale(1);
						}

						.btnRosa:hover {
							animation: rubberBand .75s;
						}

						.verifyDates-social {
							padding-top: 50px;
							font-size: 14px;
							color: #35477d;
						}

						.verifyDates-social strong {
							font-family: Baloo;
							color: #f67280;
						}

						.headerNetworkSocial {
							text-align: center;
							color: white;
						}
						.headerNetworkSocial figure {
							width: 35px;
							height: 35px;
							transition: .3s linear;
							border-radius: 10px;
							margin: 6px;
							margin-top: 15px;
							box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3);
							border-radius: 10px;
							background: #F64D42;
							transform: scale(1);
						}
						.headerNetworkSocial figure:hover {
							background: #F64D42;
							animation: rubberBand .75s;
						}
						.headerNetworkSocial img {
							padding-top: 10px;
						}

						.verifyDates-btns {
							position: absolute;
							max-width: 300px;
							width: 100%;
							top: -20px;
							left: 0;
							right: 0;
							margin: auto;
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

export default Game;