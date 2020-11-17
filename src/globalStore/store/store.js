import { createStore } from 'redux';
import {reducers} from './rootReducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import { GlobalStore } from 'redux-micro-frontend';


debugger
//Global Store
const globalStore = GlobalStore.Get();

const appStore = createStore(reducers); // Redux Store
globalStore.RegisterStore("App2", appStore);
globalStore.RegisterGlobalActions("App2", ['INSERT_FATHER_INFO']);
debugger;
//My own store
export const store = createStore(reducers, composeWithDevTools());



