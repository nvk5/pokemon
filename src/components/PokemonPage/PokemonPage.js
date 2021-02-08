import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { pokemonLoaded, pageNotFound, updateLoadingStatus } from '../../redux/actions';
import { usePokemonService } from '../../service/pokemonContext';
import useData from '../customHooks/useData';
import MainHeadline from '../MainHeadline';
import Stats from './Stats';
import Evolution from './Evolution';
import DetailMain from './Detail-main';
import DetailTypes from './Detail-types';
import Spinner from '../Spinner';
import NonExistentPage from '../404';
import './PokemonPage.scss';
import { Link, useParams } from 'react-router-dom';


const PokemonPage = ({ singlePokemonData: data, pokemonLoaded, loadingPokemon, pageFail, pageNotFound, updateLoadingStatus }) => {
    const { getCurrentPokemon } = usePokemonService();
    const { getData } = useData(pokemonLoaded, getCurrentPokemon, pageNotFound);
    const { id } = useParams();

    useEffect(() => {
        updateLoadingStatus();
        window.scrollTo(0, 0);
        getData(id);
    }, [getData, id, updateLoadingStatus]);

    useEffect(() => {
        const name = `${id[0].toUpperCase()}${id.slice(1)}`;

        if (!pageFail) {
            document.title = `Pokemon - ${name}`;
        }
    });

    if (pageFail) {
        return <NonExistentPage />
    }

    if (loadingPokemon) {
        return <Spinner />
    }

    return (
        <section className="pokemon">
            <MainHeadline headline={data.name} />
            <div className="pokemon__image">
                <img className="img" src={data.image} alt={data.name} />
            </div>
            <div className="pokemon__details pokemon__details--main">
                <DetailMain data={data}/>
            </div>
            <div className="pokemon__details pokemon__details--type">
                <DetailTypes data={data}/>
            </div>
            <div className="pokemon__details pokemon__details--stats">
                <Stats data={data.stats} />
            </div>
            <div className="pokemon__details pokemon__details--evolution">
                <Evolution data={data.evolution} />
            </div>
            <Link to={{ pathname: '/' }} className="pokemon__go-home link">Discover more pokemons</Link>
        </section>
    )
}

const mapStateToProps = ({ singlePokemonData, loadingPokemon, pageFail }) => ({ singlePokemonData, loadingPokemon, pageFail })

const mapDispatchToProps = { pokemonLoaded, pageNotFound, updateLoadingStatus };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);