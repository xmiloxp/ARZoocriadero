import React, { Component } from 'react';


class Index extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
    }



    render() {
        return (
            <div>
                <style>
                    .navbar-default {
                        background: none;
                        border: none;
                    }
                </style>
                <nav class="navbar navbar-default">
                    <div className="conteiner">
                        <ul class="nav navbar-nav">
                            <a className="brand-logo" href='/'>AR Zoocriadero</a>
                        </ul>
                    </div>
                    <div>
                        <a class="waves-effect waves-light btn">Iniciar Sesion</a>
                    </div>
                </nav>
                <a-scene embedded arjs='sourceType: webcam;'>
                    <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
                    <a-marker-camera preset='hiro'></a-marker-camera>
                </a-scene>
            </div>
        )
    }
}
export default Index;