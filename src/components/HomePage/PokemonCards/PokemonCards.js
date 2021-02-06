import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { cardsLoaded, fillDataGap, cacheCards } from '../../../redux/actions';
import { usePokemonService } from '../../../service/pokemonContext';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import useData from '../../customHooks/useData';
import Card from '../Card';
import Spinner from '../../Spinner';
import './PokemonCards.scss';


const PokemonCards = ({ pokemonCards, loadingCards, cardsLoaded, fillDataGap, dataGap, cacheCards, cardsCache }) => {
    const service = usePokemonService();
    const { getData } = useData(cardsLoaded, service.getMorePokemons);

    useEffect(() => {
        if (service.step > 898 && dataGap) {
            fillDataGap();
            service.fillDataGap();
        }
    }, [service.step, fillDataGap, dataGap, service]);


    useEffect(() => {
        if (!cardsCache) {
            cacheCards();
            getData();
        }
    }, [getData, cacheCards, cardsCache]);

    if (loadingCards) {
        return <Spinner home/>
    }

    return (
        <>
            <ul className="pokemon-cards">
                {pokemonCards.map(data => {
                    return <Card key={data.id} data={data} />
                })}
            </ul>
            <LoadMoreButton />
        </>
    )
}

const mapStateToProps = ({ pokemonCards, loadingCards, dataGap, cardsCache }) => ({ loadingCards, pokemonCards, dataGap, cardsCache });

const mapDispatchToProps = { cardsLoaded, fillDataGap, cacheCards };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCards);