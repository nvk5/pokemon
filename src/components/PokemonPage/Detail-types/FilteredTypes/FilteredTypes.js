import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { typesLoaded, updateLoadingFilterStatus, typesFail } from '../../../../redux/actions';
import { usePokemonService } from '../../../../service/pokemonContext';
import useData from '../../../customHooks/useData';
import PokemonList from '../../../PokemonList/';
import Spinner from '../../../Spinner';
import './FilteredTypes.scss';

const FilteredTypes = ({ filteredTypes, typesLoaded, loadingFilter, updateLoadingFilterStatus, typesFail, filteredTypesFail }) => {
    const { getFilteredTypes } = usePokemonService();
    const { getData } = useData(typesLoaded, getFilteredTypes, typesFail);
    const { id, type: pokemonType } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        updateLoadingFilterStatus();
        getData(pokemonType);
    }, [getData, pokemonType, updateLoadingFilterStatus]);

    if (filteredTypesFail) {
        return (
            <div className="type-filter-fail">
                <p className="type-filter-fail__text">Wrong pokemon type</p>
                <button className="type-filter-fail__button" onClick={goBack}>back</button>
            </div>
        )
    }

    if (loadingFilter) {
        return <Spinner sm />
    }

    return (
        <>
            <Link className="type-filter-close link" to={`/${id}`}>
                <span className="name">{pokemonType}</span>
                <span className="icon">&times;</span>
            </Link>
            <div className="filtered-types">
                <PokemonList pokemons={filteredTypes} types />
            </div>
        </>
    )
}

const mapStateToProps = ({ filteredTypes, loadingFilter, filteredTypesFail }) => ({ filteredTypes, loadingFilter, filteredTypesFail });

const mapDispatchToProps = { typesLoaded, updateLoadingFilterStatus, typesFail }

export default connect(mapStateToProps, mapDispatchToProps)(FilteredTypes);