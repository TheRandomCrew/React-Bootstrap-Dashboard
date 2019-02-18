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
						<div className="header-left">
							<a href="" className="header-leftLink">
								<figure className="header-logo">
									<img src="/static/img/react.png" alt=""/>
								</figure>
							</a>
							<ul className="header-leftItems">
								<li className="header-leftItem">
									<a href="">Feature</a>
								</li>
								<li className="header-leftItem">
									<a href="">Pricing</a>
								</li>
								<li className="header-leftItem">
									<a href="">Getting Started</a>
								</li>
							</ul>
							<div className="menu-hamburguer" id="menuHamburguer" onClick={this.menuHamburguer}>
								<div className="menu-hamburguer__stripe menu-hamburguer__stripe__top"></div>
								<div className="menu-hamburguer__stripe menu-hamburguer__stripe__middle"></div>
								<div className="menu-hamburguer__stripe menu-hamburguer__stripe__bottom"></div>
							</div>
						</div>
						<div className="header-right">
							<ul className="header-rightItems">
								<li className="header-rightItem">
									<a href="" className="header-components" onClick={this.headerComponents}>Components</a>
									<ul id="headerMenu-components" className="header-rightItems-components">
										<li>
											<a href="">Charts</a>
										</li>
										<li>
											<a href="">News</a>
										</li>
										<li>
											<a href="">Tables</a>
										</li>
										<li>
											<a href="">Menus</a>
										</li>
										<span></span>
										<li>
											<a href="">Typography</a>
										</li>
										<li>
											<a href="">Others</a>
										</li>
									</ul>
								</li>
								<li className="header-rightItem">
									<a href="">About us</a>
								</li>
							</ul>
						</div>
						<div className="menuMobile">
							<ul className="header-leftItems" id="header-leftItems">
								<li className="header-leftItem">
									<a href="">Feature</a>
								</li>
								<li className="header-leftItem">
									<a href="">Pricing</a>
								</li>
								<li className="header-leftItem">
									<a href="">Getting Started</a>
								</li>
							</ul>
							<div className="header-right" id="header-rightItem">
								<ul className="header-rightItems" id="header-rightItems">
									<li className="header-rightItem">
										<a href="" className="header-components" onClick={this.headerComponents}>Components</a>
										<ul id="headerMenu-componentsMobile" className="header-rightItems-components">
											<li>
												<a href="">Charts</a>
											</li>
											<li>
												<a href="">News</a>
											</li>
											<li>
												<a href="">Tables</a>
											</li>
											<li>
												<a href="">Menus</a>
											</li>
											<span></span>
											<li>
												<a href="">Typography</a>
											</li>
											<li>
												<a href="">Others</a>
											</li>
										</ul>
									</li>
									<li className="header-rightItem">
										<a href="">About us</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					
					<style jsx>{`
						.header {
							padding: 10px 0;
						}

						.header-container {
							display: flex;
							justify-content: center;
							align-items: center;
							position: relative;
						}

						.header-left,
						.header-right,
						.header-leftItems {
							display: flex;
							align-items: center;
							justify-content: center;
						}

						.header-left {
							width: 60%;
							justify-content: start;
						}

						.header-left .header-leftLink {
							width: 15%;
						}

						.header-logo {
							max-width: 50px;
							display: block;
							height: auto;
							margin: auto;
						}
						.header-leftItems {
							justify-content: space-evenly;
							width: 75%;
						}
			
						.header-right {
							width: 40%;
							justify-content: flex-end;
						}
					
						.header-rightItems {
							display: flex;
							justify-content: flex-end;
							width: 100%;
						}

						.header-rightItem {
							margin-left: 20px;
							position: relative;
						}

						.header-components {
							position: relative;
							padding-right: 10px;
						}

						.header-components:before {
							content: "";
							position: absolute;
							top: 4px;
							right: -4px;
							width: 0;
							height: 0;
							border-style: solid;
							border-width: 5px 5px 0 5px;
							border-color: #ffffff transparent transparent transparent;
						}

						.header-rightItems-components {
							position: absolute;
							opacity: 0;
							visibility: hidden;
							top: 30px;
							left: -5px;
							background: #333a41;
							padding: 10px;
							padding-right: 20px;
							box-sizing: border-box;
							transition: .3s linear;
						}

						.header-rightItems-components a {
							display: block;
						}

						.header-rightItems-components li {
							margin-bottom: 10px;
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
								display: block;
								top: 45px;
							}
							.header-leftItems,
							.header-right {
								display: none;
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