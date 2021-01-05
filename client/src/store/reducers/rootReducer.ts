import { combineReducers } from 'redux';
import { authReducer } from '@store/reducers/authReducer';
import { pizzaReducer } from '@store/reducers/pizzaReducer';

export const rootReducer = combineReducers({
  token: authReducer,
  pizza: pizzaReducer,
});