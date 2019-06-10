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

    closeModal = () => {
        this.setState((prevState) => ({

        }));
    }
    render() {
        return (
            <div className="bg-modal" >
                <div className="modal-content">
                    <div className="close" onClick={this.props.openModal} > + </div>
                    <form action="">
                        <div className="input">
                            <div className="label">
                                <label for="">
                                <i class="far fa-user"></i>
                                </label>
                            </div>
                            <input type="text" name="" className="" id="" placeholder="Username"/>
                        </div>

                        <div className="input">
                            <div className="label">
                                <label for="">                                
                                <i class="far fa-eye-slash"></i>
                                </label>
                            </div>
                            <input type="text" name="" className="" id="" placeholder="Password"/>
                        </div>

                        <div className="custom-options">
                            <span>
                                <input type="checkbox" name="" id="rm"/>
                                <label for="rm">Remember Me</label>
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
                                <button><i class="fab fa-facebook"></i></button>
                                <button><i class="fab fa-twitter"></i></button>
                                <button><i class="fab fa-google-plus-g"></i></button>
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