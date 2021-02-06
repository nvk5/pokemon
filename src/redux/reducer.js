const initialState = {
    pokemonCards: [],
    loadMore: false,
    loadingCards: true,
    dataGap: true,
    listCache: false,
    cardsCache: false,
    pokemonList: [],
    loadingList: true,
    error: false,
    searchValue: '',
    isMaxData: false,
    singlePokemonData: [],
    loadingPokemon: true,
    pageFail: false,
    showMobMenu: false,
    redirect: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CARDS_LOADED':
            return {
                ...state,
                showMobMenu: false,
                loadingCards: false,
                loadMore: false,
                pokemonCards: [...state.pokemonCards, ...action.payload],
                loadingPokemon: true,
                pageFail: false,
                searchValue: '',
                
            }
        case 'LIST_LOADED':
            return {
                ...state,
                showMobMenu: false,
                loadingList: false,
                pokemonList: action.payload,
                loadingPokemon: true,
                pageFail: false,
                searchValue: '',
                
            }
        case 'LOAD_MORE_DATA':
            return {
                ...state,
                loadMore: true,
                cardsCache: false
            }
        case 'REACH_MAX_DATA':
            return {
                ...state,
                isMaxData: true
            }
        case 'FILL_DATA_GAP':
            return {
                ...state,
                dataGap: false
            }
        case 'SEARCHING':
            return {
                ...state,
                searchValue: action.value,
            }
        case 'POKEMON_LOADED':
            return {
                ...state,
                pageFail: false,
                singlePokemonData: action.payload,
                loadingPokemon: false,
                showMobMenu: false,
                searchValue: ''
            }
        case 'LOADING_STATUS_UPDATED':
            return {
                ...state,
                pageFail: false,
                loadingPokemon: true
            }
        case 'PAGE_NOT_FOUND':
            return {
                ...state,
                pageFail: true,
                loadingPokemon: false,
                searchValue: '',
                showMobMenu: false
            }
        case 'MENU_TOGGLED':
            return {
                ...state,
                showMobMenu: !state.showMobMenu
            }
        case 'MENU_HIDDEN':
            return {
                ...state,
                showMobMenu: false
            }
        case 'CARDS_CACHE':
            return {
                ...state,
                cardsCache: true
            }
        case 'LIST_CACHE':
            return {
                ...state,
                listCache: true
            }
        case 'REDIRECTED_TO': {
            return {
                ...state,
                redirect: action.payload,
                showMobMenu: false,
                searchValue: ''
            }
        }
        default:
            return state
    }
}

export default reducer;