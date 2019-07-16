//import React from 'react';
import React, {Component} from 'react';
//import ReactDOM, { render } from 'react-dom';

//import Link from 'next/link';

class ModalLogin extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            app: false
        };
        //        this.handleChange = this.handleChange.bind(this);
        //      this.addTask = this.addTask.bind(this);
    }

    /*   addTask(e) {
           fetch('/api/animals', {
               method: 'POST',
               body: JSON.stringify(this.state),
               headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               }
           })
               .then(res => res.json())
               .then(data => {
                   console.log(data)
                   M.toast({ html: 'Task Saved' });
                   this.setState({ title: '', description: '' });
   
               })
               .catch(err => console.error(err));
   
           e.preventDefault();
       }
   
       handleChange(e) {
           const { name, value } = e.target;
           this.setState({
               [name]: value
           });
       }*/

   /* openApp = () => {
        this.setState((prevState) => ({
            app: !prevState.app
        }));
    }
*/
//onClick={this.props.openModal} 
    render() {
        return (
            <div className="bg-modal" >
                <div className="modal-content">
                    <div className="close">
                        <i className="material-icons">cancel</i>
                    </div>

                    <div className="head-label">
                        <h3>Logo</h3>
                        <span>Don't have an account yet? <a href="">Create your account</a>, it takes less than a minute.</span>
                    </div>
                    <form action="">
                        
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="usuario" type="text" className="validate" />
                                <label htmlFor="usuario">Usuario</label>
                            </div>
                            <div className="input-field col s12">
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
                                <a href=""> Forgot Password? </a>
                            </span>
                        </div>

                        <div className="action-options">
                                <button>Login</button>                           
                        </div>

                        <div className="log-options">
                            <span>
                                Or Login With
                            </span>
                            <div className="social">
                                <button title="facebook"> <img/> </button>
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

export default ModalLogin;

