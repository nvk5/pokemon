import React, { useContext } from 'react';
import PokemonService from './pokemonService';

const pokemonService = new PokemonService();

const PokemonContext = React.createContext();
export const usePokemonService = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
    return (
        <PokemonContext.Provider value={pokemonService}>
            {children}
        </PokemonContext.Provider>
    )
}