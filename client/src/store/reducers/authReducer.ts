import { Action, ActionTypes } from '@store/types/types';
import { Token } from '@store/actions/authAC';

export const authReducer = (state: Token = {}, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TOKENS:
      const { accessToken } = action.payload;
      return { ...state, accessToken };
    default:
      return state;
  }
};