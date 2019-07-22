import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class TablaDinamic extends Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/api">
                        AR Zoocriadero
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/api/registro">Registro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/api">Lista Animales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/api/user">Users</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="!#">Action</a>
                                    <a className="dropdown-item" href="!#">Another action</a>
                                    <a className="dropdown-item" href="!#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>


            </div>
        );
    }

}


