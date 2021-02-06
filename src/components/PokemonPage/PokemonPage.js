import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { pokemonLoaded, pageNotFound, updateLoadingStatus } from '../../redux/actions';
import { usePokemonService } from '../../service/pokemonContext';
import useData from '../customHooks/useData';
import MainHeadline from '../MainHeadline';
import Description from './Description';
import Weight from './Weight';
import Height from './Height';
import Gender from './Gender';
import Category from './Category';
import Habitat from './Habitat';
import Type from './Type';
import Abilities from './Abilities';
import Weaknesses from './Weaknesses';
import Strengths from './Strengths';
import Stats from './Stats';
import Evolution from './Evolution';
import Spinner from '../Spinner';
import NonExistentPage from '../404';
import './PokemonPage.scss';
import { Link } from 'react-router-dom';


const PokemonPage = ({ singlePokemonData: data, pokemonLoaded, loadingPokemon, pageFail, pageNotFound, match, updateLoadingStatus }) => {
    const service = usePokemonService();
    const { getData } = useData(pokemonLoaded, service.getCurrentPokemon, pageNotFound);
    const { id } = match.params;

    useEffect(() => {
        updateLoadingStatus();
        window.scrollTo(0, 0);
        getData(id);
    }, [getData, id, updateLoadingStatus]);

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
                <Description data={data.description} />
                <Weight data={data.weight} />
                <Height data={data.height} />
                <Gender data={data.gender} />
                <Abilities data={data.abilities} />
                <Category data={data.category} />
                <Habitat data={data.habitat} />
            </div>
            <div className="pokemon__details pokemon__details--extra">
                <Type data={data.types} />
                <Weaknesses data={data.weaknesses} />
                <Strengths data={data.strengths} />
            </div>
            <div className="pokemon__details pokemon__details--stats">
                <Stats data={data.stats} />
            </div>
            <div className="pokemon__details pokemon__details--evolution">
                <Evolution data={data.evolution} />
            </div>
            <Link to={{pathname: '/'}} className="pokemon__go-home link">Discover more pokemons</Link>
        </section>
    )
}

const mapStateToProps = ({ singlePokemonData, loadingPokemon, pageFail }) => ({ singlePokemonData, loadingPokemon, pageFail })

const mapDispatchToProps = { pokemonLoaded, pageNotFound, updateLoadingStatus };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);