import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchPokemon } from '../../../redux/pokemonList/pokemonListActions';
import './Search.scss';

const Search = ({ sm }) => {
    const search = useRef(null);
    const dispatch = useDispatch();
    const { pokemonListSearch } = useSelector(state => state.pokemonList);

    useEffect(() => search.current.focus(), []);

    return (
        <div className={sm ? "search search--sm" : "search"}>
            <input
                ref={search}
                type="search"
                value={pokemonListSearch}
                onChange={(e) => dispatch(searchPokemon(e.target.value.toLocaleLowerCase()))}
                placeholder="Search..."
                className="search__field"
            />
            <Link to={{ pathname: `/${pokemonListSearch}` }} className="search__btn" aria-label="search pokemon">
                <svg viewBox="0 0 64 64"><g><g id="Icon-Search" transform="translate(30.000000, 230.000000)"><path className="st0" d="M-2.3-182.9c-10.7,0-19.5-8.7-19.5-19.5c0-10.7,8.7-19.5,19.5-19.5s19.5,8.7,19.5,19.5     C17.1-191.6,8.4-182.9-2.3-182.9L-2.3-182.9z M-2.3-219c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.7     C14.3-211.5,6.8-219-2.3-219L-2.3-219z" id="Fill-1" /><polyline className="st0" id="Fill-2" points="23.7,-174.2 10.1,-187.7 12.3,-189.9 25.8,-176.3 23.7,-174.2    " /></g></g></svg>
            </Link>
        </div>
    )
}

export default Search;