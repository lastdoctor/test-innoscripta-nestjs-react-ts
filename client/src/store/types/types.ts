import { RequestSignupAction } from '@store/actions/authAC';
import { RequestPizzaAction } from '@store/actions/pizzaAC';
import { RequestExchangeAction } from '@store/actions/currencyAC';
import { SelectedCurrencyAction } from '@store/actions/changeAC';
import { SelectedPizzaAction } from '@store/actions/selectedPizzaAC';

export enum ActionTypes {
  ADD_TOKENS = 'ADD_TOKENS',
  REMOVE_TOKENS = 'REMOVE_TOKENS',
  ADD_PIZZAS = 'ADD_PIZZAS',
  GET_CURRENCY = 'GET_CURRENCY',
  ADD_SELECTED_CURRENCY = 'ADD_SELECTED_CURRENCY',
  ADD_SELECTED_PIZZA = 'ADD_SELECTED_PIZZA'
}

export type Action = RequestSignupAction
  | RequestPizzaAction
  | RequestExchangeAction
  | SelectedCurrencyAction
  | SelectedPizzaAction