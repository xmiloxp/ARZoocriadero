import React, { Component } from 'react';

class ModalLogin extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
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
    }

    render() {
        return (
            <div className="bg-modal" >
                <div className="modal-content">
                    <div className="close" onClick={this.props.openModal} >x</div>
                    <form action="">

                        <div class="row">
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="usuario" type="text" class="validate" />
                                    <label for="usuario">Usuario</label>
                                </div>
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">visibility_off</i>
                                <input id="password" type="password" class="validate" />
                                <label for="password">Contraseña</label>
                            </div>
                        </div>

                        <div className="custom-options">
                            <span>
                                <input type="checkbox" name="" id="rm" />
                                <label>Remember Me</label>
                            </span>
                            <span>
                                Forgot Password?
                            </span>
                        </div>

                        <div className="action-options">
                            <button type="submit">Login</button>
                        </div>

                        <div className="log-options">
                            <span>
                                Or Login With
                            </span>
                            <div className="social">
                                <button><i className="fab fa-facebook"></i></button>
                                <button><i className="fab fa-twitter"></i></button>
                                <button><i className="fab fa-google-plus-g"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ModalLogin;

/* <form action="/add" method="POST" onSubmit={this.addTask}>
                            <div className="row">
                                <div className="imput-field col s12">
                                    <input name="title" onChange={this.handleChange} type="text" placeholder="Task Title" value={this.state.title} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="imput-field col s12">
                                    <textarea name="description" onChange={this.handleChange} placeholder="Task Description" className="materialize-textarea" value={this.state.description}></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn light-blue darken-4">Enviar</button>
                        </form>*/