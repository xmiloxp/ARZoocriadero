import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class NotesList extends Component {
    state = {
        animal: []
    }

    componentDidMount() {
        const res = axios.get('http://localhost:4000/api/animals');
        this.setState({animls: res.data})
    }

    render(){
        return(
            <div className="row">
                {
                    this.state.animal.map(animals => (
                        <div className="col s12 m4" key={animals._id}>
                            <div className="card">
                                <div className="card-image">
                                    <img src="https://la.network/wp-content/uploads/2017/02/Rupicola-peruvianus-Gallito-de-Roca-Andino-Foto-Carlos-Mario-Wagner-Wagner-.jpg" />
                                    <Link className="btn-floating halfway-fab waves-effect waves-light red" href="/api/info"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <h5>{animals.nombreCientifico}</h5>
                                    <p>Comun: {animals.nombreComun}</p>
                                    <p>Especie: {animals.especie}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }       
            </div>
        );
    }
}