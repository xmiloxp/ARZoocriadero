import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navb from './Navb'
import Registro from './registro'
import NoteList from '../enlaces/NotesList'
import CreateAnimal from '../enlaces/CreateNotes'
import CreateUser from '../enlaces/CreateUser'
import '../styles/appStyles.css'
//import '../components/menu'

export default class appZ extends Component {

    render() {
        return (
            <BrowserRouter>
                <Navb/>
                <div className="container p-4">
                    <Route path="/api/registro" component={Registro} />
                    <Route path="/api/aves" component={CreateAnimal} />
                    <Route path="/api/mamifero" component={CreateAnimal} />
                    <Route path="/api/reptiles" component={CreateAnimal} />
                    <Route path="/api" exact component={NoteList} />
                    <Route path="/api/edit/:id" component={CreateAnimal} />
                    <Route path="/api/user" component={CreateUser} />
                </div>
            </BrowserRouter>
        );
    }
}
