import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listLoaded, cacheList } from '../../../redux/actions';
import { usePokemonService } from '../../../service/pokemonContext';
import useData from '../../customHooks/useData';
import Spinner from '../../Spinner';
import PokemonList from '../../PokemonList';
import './SearchList.scss';

const FilterFail = () => (
    <p className="pokemon-list__failed">Pokemons not found</p>
)

const SearchList = ({ pokemonList, loadingList, listLoaded, listCache, cacheList }) => {
    const { getAllPokemons } = usePokemonService();
    const { getData } = useData(listLoaded, getAllPokemons);

    useEffect(() => {
        if (!listCache) {
            if (window.matchMedia('(min-width: 768px)').matches) {
                cacheList();
                getData()
            }
        }

    }, [getData, listCache, cacheList]);

    if (loadingList) {
        return <Spinner sm />
    }

    if (pokemonList.length === 0) {
        return <FilterFail />
    }

    return (
        <div className="search-list">
            <PokemonList pokemons={pokemonList} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);