import { RequestSignupAction } from '@store/actions/authAC';
import { RequestPizzaAction } from '@store/actions/pizzaAC';

export enum ActionTypes {
  ADD_TOKENS = 'ADD_TOKENS',
  REMOVE_TOKENS = 'REMOVE_TOKENS',
  ADD_PIZZAS = 'ADD_PIZZAS'
}

export type Action = RequestSignupAction | RequestPizzaAction