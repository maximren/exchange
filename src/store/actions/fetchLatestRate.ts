import { ThunkAction } from 'redux-thunk';
import { Map, fromJS } from 'immutable';
import { ActionCreator, AnyAction } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { latestRateApi } from '../../constatns/api';

export const fetchLatestRate: ActionCreator<ThunkAction<void, Map<string, any>, void, AnyAction>> = () => dispatch => {
  return axios.get(latestRateApi).then((response: AxiosResponse) => {
    dispatch({
      type: "FETCH_LATEST_RATE",
      payload: fromJS(response)
    })
  })
}