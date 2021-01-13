import { combineReducers } from 'redux';
import { authReducer } from '@store/reducers/authReducer';
import { pizzaReducer } from '@store/reducers/pizzaReducer';
import { currencyReducer } from '@store/reducers/currencyReducer';
import { changeReducer } from '@store/reducers/changeReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { selectedPizzaReducer } from '@store/reducers/selectedPizzaReducer';

export const rootReducer = combineReducers({
  token: authReducer,
  pizza: pizzaReducer,
  currency: currencyReducer,
  selectedCurrency: changeReducer,
  card: selectedPizzaReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;