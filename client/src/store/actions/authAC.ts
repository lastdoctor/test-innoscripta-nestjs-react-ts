import { Dispatch } from 'redux';
import axios from '@src/axios';
import { ActionTypes } from '@store/types/types';

export interface Token {
  accessToken?: string
}

export interface RequestSignupAction {
  type: ActionTypes.ADD_TOKENS
  payload: Token
}

export interface userState {
  email: string,
  password: string,
  userName?: string
  confirm?: string
}


export const RequestSignupAC = (body: userState) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.post<Token>('/auth/signup', body);
      dispatch(addTokens(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const RequestSigninAC = (body: userState) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.post<Token>('/auth/signin', body);
      dispatch(addTokens(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addTokens = (payload: Token): RequestSignupAction => (
  {
    type: ActionTypes.ADD_TOKENS,
    payload,
  }
);