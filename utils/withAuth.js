import React, { Component } from 'react'
import AuthService from './auth'

export default function withAuth(AuthComponent) {
    const Auth = new AuthService('http://localhost:5000')
    return class Authenticated extends Component {
        constructor(props) {
            super(props) 
            this.state = { isLoading: true };
        }
        componentDidMount() {
            if (!Auth.loggedIn()) {
                this.props.url.replaceTo('/')
            }
            this.setState({ isLoading: false })
        }
        render() {
            return (
                <div> {this.state.isLoading ?
                    (<div>LOADING....</div>) :
                    (<AuthComponent {...this.props} auth={Auth} />
                    )} </div>
            )
        }
    }
}