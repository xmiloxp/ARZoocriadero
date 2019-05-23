import React, { Component } from 'react';


class Index extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
    }


        return (
            <div>
                <nav className="">
                    <div className="conteiner">
                        <a className="brand-logo" href='/'>AR Zoocriadero</a>
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