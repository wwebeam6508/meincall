import { createStore, combineReducers } from 'redux';
import { appReducer } from './reducer';
const rootReducer = combineReducers(
    { app: appReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;