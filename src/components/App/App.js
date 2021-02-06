import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import AdditionalPage from '../AdditionalPage';
import HomePage from '../HomePage';
import PokemonPage from '../PokemonPage';
import './App.scss';
import { connect } from 'react-redux';

const App = ({ redirect }) => {
    return (
        <>
        <header className="header">
            <div className="container">
                <Route component={Navigation} path="/" />
            </div>
        </header>
        <main className="main">
            <div className="container">
                {redirect && <Redirect to={`/${redirect}`}/>}
                <Switch>
                    <Route component={HomePage} path="/" exact />
                    <Route component={AdditionalPage} path="/additional" />
                    <Route component={PokemonPage} path="/:id" />
                </Switch>
                
            </div>
        </main>
    </>
    )
}

const mapStateToProps = ({ redirect }) => ({ redirect });

export default connect(mapStateToProps)(App);