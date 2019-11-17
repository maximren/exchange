import { ThunkAction } from 'redux-thunk';
import { Map, fromJS } from 'immutable';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { latestRateApi } from '../../constatns/api';

export const fetchLatestRate: ActionCreator<
  ThunkAction<void, Map<string, any>, void, AnyAction>
> = (currency: string) => (dispatch: Dispatch) => {
  return axios.get(`${latestRateApi}?from=${currency}`).then((response: AxiosResponse) => {
    dispatch({
      type: "FETCH_LATEST_RATE",
      payload: fromJS(response.data)
    })
  }).catch((err: AxiosError) => console.log(err));
}

export const exchangeRate: ActionCreator<
  ThunkAction<void, Map<string, any>, void, AnyAction>
> = (amount: number, from: string, to: string) => (dispatch: Dispatch) => {
  return axios.get(`${latestRateApi}?amount=${amount}&from=${from}&to=${to}`).then((response: AxiosResponse) => {
    dispatch({
      type: "SPECIFIC_CURRENCY_RATE",
      payload: fromJS(response.data)
    })
  }).catch((err: AxiosError) => console.log(err));
}