
import React, { Component } from 'react';


class App extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
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
            .then(data =>{
                console.log(data)
                M.toast({html: 'Task Saved'});
                this.setState({title: '', description: ''});

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
            <div>
                <nav className="light-blue darken-4">
                    <div className="conteiner">
                        <a className="brand-logo" href='/'>AR Zoocriadero</a>
                    </div>
                </nav>
                <div className="conteiner">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="imput-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task Title" value= {this.state.title}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="imput-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Task Description" className="materialize-textarea" value= {this.state.description}></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;