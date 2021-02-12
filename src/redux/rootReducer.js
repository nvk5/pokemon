import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonList/pokemonListReducer';
import pokemonCardsReducer from './pokemonCards/pokemonCardsReducer';
import pokemonPageReducer from './pokemonPage/pokemonPageReducer';
import typeFilteredListReducer from './typeFilteredList/typeFilteredListReducer';
import navigationSmReducer from './NavigationSm/NavigationSmReducer';

const rootReducer = combineReducers({
    pokemonList: pokemonListReducer,
    pokemonCards: pokemonCardsReducer,
    pokemonPage: pokemonPageReducer,
    typeFilteredList: typeFilteredListReducer,
    navigationSm: navigationSmReducer
});

export default rootReducer;