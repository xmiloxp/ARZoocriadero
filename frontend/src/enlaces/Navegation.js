import React, { Component } from 'react';
import './css/main.css'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">
                        AR Zoocriadero
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Información</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ar">AR Initialize</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <header className="header content">
                    <div className="header-video">
                        <video src="https://www.pexels.com/video/turtle-underwater-1456996/" autoPlay></video>
                    </div>

                    <div className="header-content">
                        <a href="/ar" target="_blank" className="btn" >Inicializar AR</a>
                    </div>
                </header>
            </div>
        );
    }
}