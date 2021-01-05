import { Dispatch } from 'redux';
import axios from '@src/axios';
import { ActionTypes } from '@store/types/types';

export interface Pizza {
  id?: string,
  title?: string,
  description?: string,
  img?: string,
  priceUsd?: number
}

export interface RequestPizzaAction {
  type: ActionTypes.ADD_PIZZAS,
  payload: Array<Pizza>
}

export const RequestPizzaAC = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get<Array<Pizza>>('/pizzas');
      dispatch(addPizzaAC(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addPizzaAC = (payload: Array<Pizza>): RequestPizzaAction => ({
  type: ActionTypes.ADD_PIZZAS,
  payload,
});