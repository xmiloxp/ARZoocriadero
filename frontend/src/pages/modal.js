import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/styleApp.css';

export default class ModalLogin extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            app: false
        };
    }

    render() {
        return (
            <div className="bg-modal" >
                <div className="modal-content">
                    <div className="close"  onClick={this.props.openModal}>
                        <i className="material-icons">cancel</i>
                    </div>

                    <div className="head-label">
                        <img src="./milogoS.png"/>
                        <span>Don't have an account yet? <a href="!#">Create your account</a>, it takes less than a minute.</span>
                    </div>
                    <form action="">
                        
                        <div className="row">
                            <div className="input-field col-s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="usuario" type="text" className="validate" />
                                <label htmlFor="usuario">Usuario</label>
                            </div>
                            <div className="input-field col-s12">
                                <i className="material-icons prefix">visibility_off</i>
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Contraseña</label>
                            </div>
                        </div>

                        <div className="custom-options">
                            <p>
                                <label htmlFor="remember">
                                    <input id="remember" type="checkbox" className="filled-in" />
                                    <span>Filled in</span>
                                </label>
                            </p>
                            <span>
                                <a href="!#"> Forgot Password? </a>
                            </span>
                        </div>

                        <div className="action-options">
                            <Link to="/appZ">
                                <button onClick={this.props.openModal}>Login</button>
                            </Link>                         
                        </div>

                        <div className="log-options">
                            <span>
                                Or Login With
                            </span>
                            <div className="social">
                                <button title="facebook"><i className="fab fa-twitter"></i></button>
                                <button title="twitter"><i className="fab fa-twitter"></i></button>
                                <button title="Google plus"><i className="fab fa-google-plus-g"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


