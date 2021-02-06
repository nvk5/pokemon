import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMoreData, cardsLoaded, maxDataReached, cacheCards } from '../../../redux/actions'
import { usePokemonService } from '../../../service/pokemonContext';
import useData from '../../customHooks/useData';
import SpinnerSm from '../../SpinnerSm';
import './LoadMoreButton.scss';

const LoadMoreButton = ({ loadMoreData, loadMore, cardsLoaded, isMaxData, maxDataReached, cacheCards, cardsCache }) => {
    const service = usePokemonService();
    const { getData } = useData(cardsLoaded, service.getMorePokemons);

    useEffect(() => {
        if (service.step > service.MAX_DATA) {
            maxDataReached();
        }
    }, [maxDataReached, service.step, service.MAX_DATA])

    const loadHandler = () => {
        if (cardsCache) {
            loadMoreData();
            cacheCards();
            getData();
        }
    }

    return (
        <button className={isMaxData ? "load-more hide" : "load-more"} onClick={loadHandler}>
            <span className="load-more__text">Load more</span>
            <SpinnerSm show={loadMore || false} />
        </button>
    )
}

const mapStateToProps = ({ loadMore, isMaxData, cardsCache }) => ({ loadMore, isMaxData, cardsCache });

const mapDispatchToProps = { loadMoreData, cardsLoaded, maxDataReached, cacheCards };

export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreButton);