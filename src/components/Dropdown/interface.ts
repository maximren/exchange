import { OrderedMap } from 'immutable';

export interface IState {
  toggleList: boolean;
}

export interface IProps {
  handleValue: (value: string) => void;
  data: OrderedMap<string, any>;
}
