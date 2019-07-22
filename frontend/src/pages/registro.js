import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class TablaDinamic extends Component {

    onIdentiChange = (e) => {
        console.log('');
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://la.network/wp-content/uploads/2017/02/Rupicola-peruvianus-Gallito-de-Roca-Andino-Foto-Carlos-Mario-Wagner-Wagner-.jpg" />
                                <span className="card-title">AVES</span>
                                <Link className="btn-floating halfway-fab waves-effect waves-light red" to="/api/aves" onChange={onIdentiChange}><i className="material-icons">add</i></Link>
                            </div>
                            <div className="card-content">
                                <p>Las aves son animales vertebrados, de sangre caliente, que caminan, saltan o se mantienen solo sobre las extremidades posteriores,​ mientras que las extremidades anteriores han evolucionado hasta convertirse en alas que, al igual que muchas otras características anatómicas únicas, les permiten, en la mayoría de los casos, volar, si bien no todas vuelan. Tienen el cuerpo cubierto de plumas y, las aves tienen un pico córneo sin dientes. Para reproducirse ponen huevos que incuban hasta su eclosión.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54bf30ca-79a5-4324-82e0-2d91ff8aac7e/d63oddx-b05b56fe-c223-4cf6-8815-18a56229162d.jpg/v1/fill/w_1024,h_768,q_75,strp/otorongo_by_gracemontalvan_d63oddx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNTRiZjMwY2EtNzlhNS00MzI0LTgyZTAtMmQ5MWZmOGFhYzdlXC9kNjNvZGR4LWIwNWI1NmZlLWMyMjMtNGNmNi04ODE1LTE4YTU2MjI5MTYyZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X3lFHUU0Q5NtewS6t8w6bLAnSjHY3kWXhxAdHezqLlU" />
                                <span className="card-title">MAMÍFEROS</span>
                                <Link className="btn-floating halfway-fab waves-effect waves-light red" to="/api/mamifero"><i className="material-icons">add</i></Link>
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
                                <Link className="btn-floating halfway-fab waves-effect waves-light red" to="/api/reptiles"><i className="material-icons">add</i></Link>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}