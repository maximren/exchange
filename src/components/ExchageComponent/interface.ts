import { OrderedMap } from 'immutable';

export interface IState {
  firstValue: string;
  secondValue: string;
  amount: string;
}

export interface IStateToProps {
  exchangedValue: OrderedMap<string, any>;
  data: OrderedMap<string, any>;
}

export interface IDispatchToProps {
  fetchLatestRate: (value: string) => any;
  exchangeRate: (v1: string, v2: string, v3: string) => any;
}

export type IProps = IStateToProps & IDispatchToProps;