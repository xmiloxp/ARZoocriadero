import React, { Component } from 'react';
import axios from 'axios'

export default class CreateNota extends Component {
    
    state = {
        users: [],
        userSelected: '',
        nombreComun: '',
        nombreCientifico: '',
        habitad: '',
        alimentacion: '',
        especie: '',
        description: '',
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.map(user => user.username),
            userSelected: res.data[0].username
        });
        
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newAnimal = {
            nombreComun: '',
            nombreCientifico: '',
            habitad: '',
            alimentacion: '',
            especie: '',
            description: '',
            author: this.state.userSelected
        };
        await axios.post('http://localhost:4000/api/notes', newAnimal);
        window.location.href = "/api";
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear Animal</h4>

                    <div className="form-group">
                        <select className="form-group" name="userSelected" onChange={this.onInputChange}>
                        {
                            this.state.users.map(user => <option key={user} value={user}>
                                {user}
                            </option>)
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre Común" name="nombreComun" onChange={this.onInputChange} required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre Científico" name="nombreCientifico" onChange={this.onInputChange} required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Habitad" name="habitad" onChange={this.onInputChange} required/>
                    </div>
                    <div className="form-group">
                        <textarea name="alimentacion" className="form-control" placeholder="Alimentación" onChange={this.onInputChange} required>
                        
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Especie" name="especie" onChange={this.onInputChange} required/>
                    </div>

                    <div className="form-group">
                        <textarea name="description" className="form-control" placeholder="Descripción" onChange={this.onInputChange} required>
                        
                        </textarea>
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}