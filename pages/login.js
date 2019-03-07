import react from 'react'
import Layout from '../components/Layout'
import LoginComponent from '../components/login'
import Header from '../components/Header'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Layout title="Ancester Admin">
                <LoginComponent />
                <Header firstLink="Privacy" secondLink="About Us" thirdLink="The Team" fourthLink="Ancester"/>
            </Layout>
        )
    }
}