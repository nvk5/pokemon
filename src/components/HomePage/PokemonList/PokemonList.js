import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listLoaded, cacheList } from '../../../redux/actions';
import { usePokemonService } from '../../../service/pokemonContext';
import useData from '../../customHooks/useData';
import Spinner from '../../Spinner';
import './PokemonList.scss';


const FilterFail = () => (
    <p className="pokemon-list__failed">Pokemons not found</p>
)

const View = ({ pokemons }) => {
    return pokemons.map(({ name, image }) => (
        <li key={name} className="pokemon-list__item">
            <Link className="pokemon-list__link link" to={`/${name}`}>
                <span className="pokemon-list__name">{name}</span>
                {image === 'No data' ? null : <img className="pokemon-list__img img" src={image} alt={name} />}
            </Link>
        </li>
    ))
}

const PokemonList = ({ pokemonList, loadingList, listLoaded, listCache, cacheList }) => {
    const service = usePokemonService();
    const { getData } = useData(listLoaded, service.getAllPokemons);

    useEffect(() => {
        if (!listCache) {
            if (window.matchMedia('(min-width: 768px)').matches) {
                cacheList();
                getData()
            }
        }

    }, [getData, listCache, cacheList]);

    if (loadingList) {
        return <Spinner home />
    }

    if (pokemonList.length === 0) {
        return <FilterFail />
    }

    return (
        <ul className="pokemon-list">
            <View pokemons={pokemonList} />
        </ul>
    )
}

const mapStateToProps = ({ pokemonList, loadingList, searchValue, listCache }) => {
    const filteredPokemons = pokemonList.filter(item => item.name.includes(searchValue));

    if (searchValue) {
        return {
            listCache,
            loadingList,
            pokemonList: filteredPokemons,
            
        }
    }

    return { loadingList, pokemonList, listCache }
}

const mapDispatchToProps = { listLoaded, cacheList };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);