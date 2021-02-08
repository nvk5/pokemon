const cardsLoaded = data => ({ type: 'CARDS_LOADED', payload: data });
const listLoaded = data => ({ type: 'LIST_LOADED', payload: data });
const fillDataGap = () => ({ type: 'FILL_DATA_GAP' });
const loadMoreData = () => ({ type: 'LOAD_MORE_DATA' });
const searchHandler = searchString => ({ type: 'SEARCHING', value: searchString })
const maxDataReached = () => ({ type: 'REACH_MAX_DATA' });

const pokemonLoaded = data => ({ type: 'POKEMON_LOADED', payload: data });
const updateLoadingStatus = () => ({ type: 'LOADING_STATUS_UPDATED' });

const typesLoaded = data => ({ type: 'TYPES_LOADED', payload: data });
const updateLoadingFilterStatus = () => ({ type: 'LOADING_FILTER_STATUS_UPDATED' });
const typesFail = () => ({ type: 'TYPES_FAIL' });

const pageNotFound = () => ({ type: 'PAGE_NOT_FOUND' });

const toggleMenu = () => ({ type: 'MENU_TOGGLED' });
const hideMenu = () => ({ type: 'MENU_HIDDEN' });

const cacheCards = () => ({ type: 'CARDS_CACHE' });
const cacheList = () => ({ type: 'LIST_CACHE' });

const setRedirect = data => ({ type: 'REDIRECTED_TO', payload: data });

export {
    cardsLoaded,
    listLoaded,
    searchHandler,
    fillDataGap,
    loadMoreData,
    maxDataReached,
    pokemonLoaded,
    pageNotFound,
    updateLoadingStatus,
    updateLoadingFilterStatus,
    toggleMenu,
    hideMenu,
    cacheCards,
    cacheList,
    setRedirect,
    typesLoaded,
    typesFail
}