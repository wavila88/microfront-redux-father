import { createStore } from 'redux';
import {reducers} from './rootReducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import { GlobalStore } from 'redux-micro-frontend';
import {insertMicro } from '../sections/micro1Action';

debugger
//Global Store
const globalStore = GlobalStore.Get();

const appStore = createStore(reducers); // Redux Store
globalStore.RegisterStore("App1", appStore);
globalStore.RegisterGlobalActions("App1", ['INSERT_MICRO_FRONT1_OBJECT']);
//My own store
export const store = createStore(reducers, composeWithDevTools());



