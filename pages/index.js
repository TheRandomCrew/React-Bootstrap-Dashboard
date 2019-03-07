import react from 'react'
import Layout from '../components/Layout'
import SliderHome from '../components/SliderHome'
import Game from '../components/Game'
import ImagesHome from '../components/ImagesHome'
import Header from '../components/Header'
import Features from '../components/Features'
export default class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<Layout title="Ancester Admin">

		
				<SliderHome></SliderHome>

				<div className="container twoColumns">

					<Game></Game>
					<ImagesHome></ImagesHome>

				</div>

				<Features></Features>

				<Header firstLink="Privacy" secondLink="About Us" thirdLink="The Team" fourthLink="Ancester"></Header>

				<style jsx>{`

					.container {
						max-width: 1200px;
						width: 80%;
						margin: auto;
						display: flex;
						align-items: center;
						align-self: center;
						justify-content: center;
					}

					.twoColumns {
						display: flex;
						justify-content: center;
						align-items: stretch;
						margin: 30px auto;
					}

				
					
					

				`}</style>

			</Layout>
		)
	}

}





