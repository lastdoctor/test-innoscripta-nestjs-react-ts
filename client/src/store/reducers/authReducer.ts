import { Action, ActionTypes } from '@store/types/types';
import { Token } from '@store/actions/authAC';

const initialState: Token = {
  accessToken: '',
};

export const authReducer = (state: Token = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TOKENS:
      const { accessToken } = action.payload;
      return { ...state, accessToken };
    default:
      return state;
  }
};