import React, { useEffect } from 'react';
import MainHeadline from '../MainHeadline';
import { connect } from 'react-redux';
import { hideMenu } from '../../redux/actions';
import PokemonList from './PokemonList';
import Search from './Search';
import PokemonCards from './PokemonCards';
import './HomePage.scss';

const HomePage = ({ hideMenu }) => {
    useEffect(() => window.scrollTo(0, 0));
    useEffect(() => hideMenu(), [hideMenu]);

    return (
        <section className="home">
            <MainHeadline home />
            <div className="home__aside">
                <Search />
                <div className="home__search-result">
                    <PokemonList />
                </div>
            </div>
            <div className="home__cards">
                <PokemonCards />
            </div>
        </section>
    )
}

const mapStateToProps = { hideMenu };

export default connect(null, mapStateToProps)(HomePage);