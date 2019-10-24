import { createStore } from 'redux';
import { } from 'react-dom';

import reducer from './reducers/index';

import { getStorage, setStorage } from './localStorage';

/* Reducer -> funciones q modifican state */
const storageState = getStorage();

const Store = createStore(
    reducer,
    storageState, // State inicial
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe( () => {
    setStorage({
        citas: Store.getState().citas
    });
});

export default Store; 