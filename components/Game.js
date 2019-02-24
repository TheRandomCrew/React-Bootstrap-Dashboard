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
						<h1>PLAY OUR GAME:</h1>

						<button className="btnRosa">
							Play
						</button>
						<div className="Game-register">
							
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