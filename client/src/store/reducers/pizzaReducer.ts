import { Action, ActionTypes } from '@store/types/types';
import { Pizza } from '@store/actions/pizzaAC';

export const pizzaReducer = (state: Array<Pizza> = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_PIZZAS:
      const pizzas = action.payload;
      return { ...state, pizzas };
    default: {
      return state;
    }
  }
};