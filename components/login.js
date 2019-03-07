import React, { Component } from 'react'
import AuthService from '../utils/AuthService'

const auth = new AuthService('http://localhost:5000')

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        if (auth.loggedIn()) {
            this.props.url.replaceTo('/admin') // redirect if you're already logged in 
        }
    }
    handleSubmit(e) {
        e.preventDefault() // yay uncontrolled forms! 
        auth.login(this.refs.email.value, this.refs.password.value)
            .then(res => {
                console.log(res)
                this.props.url.replaceTo('/admin')
            })
            .catch(e => console.log(e)) // you would show/hide error messages with component state here 
    }
    render() {
        return (
            <div> 

                <div className="verifyDates">

                    <h1 className="verifyDates-title">
                        JUEGA PIEDRA - PAPEL O TIJERA LS Y CHATEA
                    </h1>

                    <div className="container">

                        <form onSubmit={this.handleSubmit} >

                            <div className="verifyDates-boxshadow">

                                <ul className="verifyDates-btns">
                                    <li className="headerMenu-mobileLogin">
                                        <a href="" className="headerMenu-iniciarMobile active">
                                            <img src="/static/img/crear.svg" alt=""/>
                                            <figcaption>Regístrate</figcaption>
                                        </a>
                                        <a href="" className="headerMenu-crearMobile active">
                                            <img src="/static/img/iniciar.svg" alt=""/>
                                            <figcaption>Iniciar Sesión</figcaption>
                                        </a>
                                    </li>
                                </ul>

                                <div className="verifyDates-social">
                                    <p>Si deseas ingresa con tus <strong>Redes Sociales</strong> y completa los datos que falten</p>

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
                                            <a href="">
                                                <figure className="">
                                                    <img src="/static/img/instagram.svg" alt=""/>
                                                </figure>
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                                <div className="verifyDates-form">
                                        <div className="verifyDates-formInput">
                                            <input ref="email" type="email" placeholder="Email*"/>
                                            <input ref="password" type="password" placeholder="Contraseña*"/>
                                        </div>
                                </div>

                                <a href="" className="">
                                    ¿Olvidaste tu Contraseña?
                                </a>

                            </div>
                        
                            <button type="submit" className="btnRosa">
                                Confirmar Datos
                            </button>

                        </form>


                        
                        
                    </div>

                </div>

                <style jsx>{`

                    .ProductSelected-title {
                        font-family: baloo;
                        font-size: 30px;
                        margin-bottom: 40px;
                        color: #00000026;
                    }

                    .verifyDates {
                        font-size: 25px;
                        text-align: center;
                        margin: 10px;
                        margin: auto;
                        margin-bottom: 80px;
                        font-size: 16px;
                    }

                    .verifyDates a{
                        color: #e4e5e5;
                    }
                    
                    .verifyDates .container {
                        margin: auto;
                        max-width: 520px;
                        width: 95%;
                        margin: auto;
                        position: relative;
                    }

                    .verifyDates-title {
                        font-size: 40px;
                        text-align: center;
                        margin-bottom: 20px;
                        color: #35477d;
                        margin-top: 60px;
                        margin-bottom: 70px;
                    }

                    .verifyDates-boxshadow {
                        box-shadow: 2px 3px 30px rgba(228, 55, 118, 0.1);
                        border-radius: 20px;
                        background: white;
                        box-sizing: border-box;
                        padding-bottom: 30px;
                    }

                    .verifyDates-boxshadow p {
                        padding-top: 30px;
                    }

                    .verifyDates-form {
                        padding: 30px 0 20px 0px;
                        font-size: 14px;
                    }
                    .verifyDates-formInput input {
                        font-family: 'UniSans';
                        max-width: 300px;
                        width: 100%;
                        margin: 2%; 
                        height: 55px;
                        line-height: 35px;
                        padding-left: 20px;
                        box-sizing: border-box;
                        border-radius: 3px;
                        border: none;
                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.05);
                        color: #E43776;
                    }
                    .verifyDates-formInput input:focus {
                        box-shadow: 2px 3px 30px rgba(228, 55, 118, 0.1);
                    }
                    .verifyDates-formInput p {
                        text-align: left;
                        font-size: 14px;
                        padding-left: 10px;
                    }
                    .btnRosa {
                        background: linear-gradient(90deg, #E43776 -4.07%, #E43776 44.81%, #FA5236 103.82%);
                        box-shadow: 0px 2px 10px rgba(228, 55, 118, 0.35);
                        border-radius: 30px;
                        text-align: center;
                        line-height: 30px;
                        color: white;
                        padding: 10px 40px;
                        font-family: 'Baloo';
                        margin-top: 20px;
                        font-size: 17px;
                        border: none;
                        cursor: pointer;
                        transform: scale(1);
                    }

                    .btnRosa:hover {
                        animation: rubberBand .75s;
                    }

                    .verifyDates-social {
                        padding-top: 50px;
                        font-size: 14px;
                    }

                    .verifyDates-social strong {
                        font-family: Baloo;
                        color: #E43776;
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
                    }
                    .headerNetworkSocial figure:hover {
                        background: #F64D42;
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

                    .headerMenu-mobileLogin {
                        display: flex;
                        justify-content: center;
                        margin-bottom: 20px;
                    }
                    .headerMenu-iniciarMobile {
                        width: 50%;
                        height: 40px;
                        background: white;
                        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
                        border-radius: 10px;
                        text-align: center;
                        line-height: 42px;
                        display: flex;
                        justify-content: center;
                        color: #0000004a;
                        font-size: 15px;
                        font-family: Baloo;
                    }
                    .headerMenu-iniciarMobile img {
                        margin-left: 0;
                        margin-right: 0;
                    }
                    .headerMenu-iniciarMobile figcaption{
                        margin-left: 5px;
                    }
                    .headerMenu-crearMobile {
                        font-family: Baloo;
                        width: 50%;
                        height: 40px;
                        background: linear-gradient(90deg, #E43776 -4.07%, #E43776 44.81%, #FA5236 103.82%);
                        box-shadow: 0px 2px 10px rgba(228, 55, 118, 0.35);
                        border-radius: 2px 10px 2px 10px;
                        text-align: center;
                        line-height: 42px;
                        display: flex;
                        justify-content: center;
                        color: white !important;
                        font-size: 15px;
                        margin-left: -10px;
                        width: 60%;
                    }
                    .headerMenu-crearMobile img{
                        margin-left: 0;
                        margin-right: 0;
                    }
                    .headerMenu-crearMobile figcaption{
                        margin-left: 5px;
                    }
    
                    @media screen and (max-width: 767px) {
                        .verifyDates-formInput input {
                            width: 93%;
                            height: 45px;
                        }

                        .verifyDates-btns {
                            max-width: 260px;
                        }
                    }

                    @keyframes rubberBand {
                        from {
                            -webkit-transform: scale3d(1,1,1);
                            transform: scale3d(1,1,1)
                        }

                        30% {
                            -webkit-transform: scale3d(1.25,.75,1);
                            transform: scale3d(1.25,.75,1)
                        }

                        40% {
                            -webkit-transform: scale3d(.75,1.25,1);
                            transform: scale3d(.75,1.25,1)
                        }

                        50% {
                            -webkit-transform: scale3d(1.15,.85,1);
                            transform: scale3d(1.15,.85,1)
                        }

                        65% {
                            -webkit-transform: scale3d(.95,1.05,1);
                            transform: scale3d(.95,1.05,1)
                        }

                        75% {
                            -webkit-transform: scale3d(1.05,.95,1);
                            transform: scale3d(1.05,.95,1)
                        }

                        to {
                            -webkit-transform: scale3d(1,1,1);
                            transform: scale3d(1,1,1)
                        }
                    }

                `}</style>

            </div>
        )
    }
}

export default Login