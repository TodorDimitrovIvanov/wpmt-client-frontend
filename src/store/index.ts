import {
	combineReducers,
	applyMiddleware,
	createStore,
	PreloadedState,
	compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from './auth/reducers';

//const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = (initialState?: PreloadedState<AppState>) => {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware)),
	);
};

export const store = configureStore();
