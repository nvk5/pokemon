import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import AdditionalPage from '../AdditionalPage';
import HomePage from '../HomePage';
import PokemonPage from '../PokemonPage';
import './App.scss';

const App = () => (
    <>
        <header className="header">
            <div className="container">
                <Route component={Navigation} path="/" />
            </div>
        </header>
        <main className="main">
            <div className="container">
                <Switch>
                    <Route component={HomePage} path="/" exact />
                    <Route component={AdditionalPage} path="/additional" />
                    <Route component={PokemonPage} path="/:id" />
                </Switch>
            </div>
        </main>
    </>
)

export default App;