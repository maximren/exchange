import { OrderedMap } from 'immutable';

export interface IState {
  currency: string;
}

export interface IStateToProps {
  data: OrderedMap<string, any>;
}

export interface IDispatchToProps {
  fetchLatestRate: (value: string) => any;
}

export type IProps = IStateToProps & IDispatchToProps;