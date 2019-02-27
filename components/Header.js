import Link from 'next/link'
import Head from 'next/head'

export default class Header extends React.Component {

    componentDidMount() {

    }

    headerComponents(e) {
		e.preventDefault()
		const headerMenuComponents = document.getElementById("headerMenu-components")
		const headerMenuComponentsMobile = document.getElementById("headerMenu-componentsMobile")

		headerMenuComponents.classList.toggle("active")
		headerMenuComponentsMobile.classList.toggle("active")
    }

    menuHamburguer(e) {
		e.preventDefault()
		const menuHamburguer = document.getElementById("menuHamburguer")
		const menuLeftItems = document.getElementById("header-leftItems")
		const menuRightItems = document.getElementById("header-rightItems")
		const menuRight = document.getElementById("header-rightItem")
		menuHamburguer.classList.toggle("on")
		menuLeftItems.classList.toggle("active")
		menuRightItems.classList.toggle("active")
		menuRight.classList.toggle("active")
    }

	render () {

		
		return <div className="header" >

					<div className="header-container container">
							
							<ul className="header-leftItems">
								<li className="header-leftItem">
									<a href="">{this.props.firstLink}</a>
								</li>
								<li className="header-leftItem">
									<a href="">{this.props.secondLink}</a>
								</li>
								<li className="header-leftItem">
									<a href="">{this.props.thirdLink}</a>
								</li>
								<li className="header-leftItem">
									<a href="">{this.props.fourthLink}</a>
								</li>
							</ul>

							<div className="menu-hamburguer" id="menuHamburguer" onClick={this.menuHamburguer}>
								<div className="menu-hamburguer__stripe menu-hamburguer__stripe__top"></div>
								<div className="menu-hamburguer__stripe menu-hamburguer__stripe__middle"></div>
								<div className="menu-hamburguer__stripe menu-hamburguer__stripe__bottom"></div>
							</div>
					</div>
					
					<style jsx>{`
						.header {
							padding: 15px 0;
							background: #f67280;
						}

						.header a {
							color: white;
							display: block;
						}

						.header-container {
							display: flex;
							justify-content: center;
							align-items: center;
							position: relative;
						}

						.header-leftItems {
							display: flex;
							align-items: center;
							justify-content: space-evenly;
							width: 100%;
							text-align: center;
							font-size: 14px;
						}

						.header-leftItems a {
							transition: .3s ease;
						}


						.header-leftItems a:hover {
							color: #6c5b7b;
						}

						

						.menu-hamburguer {
							cursor: pointer;
							height: 30px;
							position: absolute;
							right: 0;
							top: 40px;
							width: 30px;
							margin-top:-30px;
							transition: all .2s ease-out;
							display: none;
						}

						.menu-hamburguer .menu-hamburguer__stripe {
							width: 100%;
							height: 3px;
							background: white;
							margin: 4px auto;
							transition: all 0.3s;
							backface-visibility: hidden;
						}

						.menu-hamburguer.on .menu-hamburguer__stripe__top {
							transform: rotate(45deg) translate(0px, 0px);
						}

						.menu-hamburguer.on .menu-hamburguer__stripe__middle {
							opacity: 0;
						}

						.menu-hamburguer.on .menu-hamburguer__stripe__bottom {
							transform: rotate(-45deg) translate(10px, -10px);
						}

						.menuMobile {
							display: none;
							width: 100%;
							padding: 10px;
							justify-content: center;
							align-items: center;
						}

						.menuMobile .header-leftItems,
						.menuMobile .header-right {
							opacity: 0;
							visibility: hidden;
							transition: .3s linear;
						}

						.menuMobile .header-leftItems {
							width: 100%;
							text-align: center;
						}

						.menuMobile .header-leftItem {
							padding: 5px 0;
						}
						.menuMobile .header-right {
							width: 100%;
							text-align: center;
						}
						.menuMobile .header-rightItems {
							justify-content: center;
							flex-direction: column;
						}
						.menuMobile .header-rightItem {
							margin-left: 0;
							padding: 5px 0;
						}


						@media screen and (max-width: 767px) {
							.header-container {
								flex-direction: column;
							}
							.header-left {
								width: 100%;
							}
							.menu-hamburguer {
								// display: block;
								top: 45px;
							}
							.header-leftItems,
							.header-right {
								// display: none;
							}
							.header-leftItems.active,
							.header-right.active {
								display: block;
							}

							.header-rightItems-components {
								left: 0;
								right: 0;
								position: inherit;
								display: none;
							}

							.header-rightItems-components.active {
								opacity: 1;
								visibility: visible;
								top: 10px;
								display: block;
							}

							.menuMobile {
								display: block;
							}

							.menuMobile .header-leftItems.active,
							.menuMobile .header-right.active {
								opacity: 1;
								visibility: visible;
								display: block;
							}
						}
						

					`}</style>

				</div>
	}
}