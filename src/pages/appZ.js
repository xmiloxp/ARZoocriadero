//import React from 'react';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import '../styles/appStyles.css';
//import '../components/menu'

class appZ extends Component {

    constructor() {
        super();
        this.state = {
            title: ''
        };
    }

    render() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                <li className="divider"></li>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li><a href="#!">three</a></li>
                </ul>
                <ul id="registro" className="dropdown-content">
                <li className="divider"></li>
                    <li><a href="a">AVES</a></li>
                    <li><a href="a">MAMÍFEROS</a></li>
                    <li><a href="a">REPTILES</a></li>
                </ul>
                <nav className="base">
                    <div className="miNav"> 
                        <a href="/appZ" className="brand-logo center letra">Logo</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="dropdown-trigger" href="#!" data-target="registro">Registro<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><a href="sass.html">Mapa del Parque</a></li>
                            <li><a href="badges.html">Galeria</a></li>
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Mi Cuenta<i className="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                    </div>
                </nav>

                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://la.network/wp-content/uploads/2017/02/Rupicola-peruvianus-Gallito-de-Roca-Andino-Foto-Carlos-Mario-Wagner-Wagner-.jpg" />
                                <span className="card-title">AVES</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54bf30ca-79a5-4324-82e0-2d91ff8aac7e/d63oddx-b05b56fe-c223-4cf6-8815-18a56229162d.jpg/v1/fill/w_1024,h_768,q_75,strp/otorongo_by_gracemontalvan_d63oddx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNTRiZjMwY2EtNzlhNS00MzI0LTgyZTAtMmQ5MWZmOGFhYzdlXC9kNjNvZGR4LWIwNWI1NmZlLWMyMjMtNGNmNi04ODE1LTE4YTU2MjI5MTYyZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X3lFHUU0Q5NtewS6t8w6bLAnSjHY3kWXhxAdHezqLlU" />
                                <span className="card-title">MAMÍFEROS</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Geochelone_denticulata_-Yasuni%2C_Ecuador-8a.jpg" />
                                <span className="card-title">REPTILES</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="Micolor">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bajo">
                        <div className="container">
                            © 2014 Copyright Text
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}
render(<appZ />, document.getElementById('root'));

export default appZ;