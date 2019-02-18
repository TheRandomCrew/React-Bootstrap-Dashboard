import react from 'react'
import Layout from '../components/Layout'
export default class Admin extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<Layout title="Ancester Admin">

				<div className="container content">
					<div className="sidebar">
						<div className="sidebar-search">
							<form action="">
								<input type="text" placeholder="Buscar"/>
								<button>Buscar</button>
							</form>
						</div>

						<ul className="sidebar-items">
							<li className="sidebar-item">
								<a href="">Getting started</a>
							</li>
							<li className="sidebar-item">
								<a href="">Charts</a>
							</li>
							<li className="sidebar-item">
								<a href="">News</a>
							</li>
							<li className="sidebar-item">
								<a href="">Tables</a>
							</li>
							<li className="sidebar-item">
								<a href="">Typography</a>
							</li>
							<li className="sidebar-item">
								<a href="">Others</a>
							</li>
						</ul>
					</div>

					<div className="dashboard">
						<div className="dashboard-title">
							<h2>Danilo Dashboard</h2>
							<p>
								Plus off-canvas sidebar, based on Bootstrap v4
							</p>
						</div>

						<div className="dashboard-rectangle">

							<div className="dashboard-rectangle-users">
								<h2 className="dashboard-rectangle-users-title">
									USERS
								</h2>
								<div className="dashboard-rectangle-users-number">
									135
								</div>
							</div>

							<div className="dashboard-rectangle-users">
								<h2 className="dashboard-rectangle-users-title">
									POSTS
								</h2>
								<div className="dashboard-rectangle-users-number">
									88
								</div>
							</div>

							<div className="dashboard-rectangle-users">
								<h2 className="dashboard-rectangle-users-title">
									ADS
								</h2>
								<div className="dashboard-rectangle-users-number">
									1326
								</div>
							</div>

							<div className="dashboard-rectangle-users">
								<h2 className="dashboard-rectangle-users-title">
									BADGES
								</h2>
								<div className="dashboard-rectangle-users-number">
									15
								</div>
							</div>

						</div>

					</div>
				</div>


				<style jsx>{`

					.container {
						max-width: 1200px;
						width: 95%;
						margin: auto;
						display: flex;
						align-items: center;
						justify-content: center;
					}

				
					
					.content {
						align-items: start;
					}
					.sidebar {
						width: 20%;
						padding: 5px 0;
					}
					.sidebar-search {
						position: relative;
						border-radius: 5px;
						overflow: hidden;
						margin-bottom: 10px;
					}

					.sidebar-search input {
						border: none;
						padding: 10px;
						width: 100%;
					}
					.sidebar-search button {
						position: absolute;
						border: 1px solid transparent;
						color: white;
						top: 0;
						right: 0;
						bottom: 0;
						border: none;
						background: gray;
						text-align: center;
						padding: 5px;
						border-radius: 5px;
					}

					.sidebar-item {
						margin: 20px 0;
					}

					.dashboard {
						width: 80%;
						background: #ecffef;
						color: black;
						padding: 10px;
						box-sizing: border-box;
						margin-left: 15px;
						border-radius: 4px;
					}
					.dashboard-title {
						margin-top: 40px;
					}
					.dashboard-title h2 {
						margin-top: 10px;
						font-size: 30px;
					}
					.dashboard-title p {
						margin-top: 10px;
						font-size: 16px;
						margin-bottom: 20px;
					}

					.dashboard-rectangle {
						display: flex;
						flex-wrap: wrap;
					}

					.dashboard-rectangle-users {
						width: 48%;
						background: red;
						margin: 0 2% 2% 0%;
						display: flex;
						justify-content: center;
						align-items: start;
						padding: 30px;
						padding-left: 20px;
						flex-direction: column;
						color: white;
						box-sizing: border-box;
					}
					.dashboard-rectangle-users-number {
						font-size: 40px;
						margin-top: 20px;
					}

				`}</style>

			</Layout>
		)
	}

}





