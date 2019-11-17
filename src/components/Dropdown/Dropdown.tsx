import React, { PureComponent } from 'react';
import { OrderedMap } from 'immutable';

import { IProps, IState } from './interface';

class Dropdown extends PureComponent<IProps, IState> {

  static defaultProps = {
    data: OrderedMap<string, any>(),
    handleValue: (value: string) => value,
  }

  render() {
    return (
      <select onChange={(e) => this.props.handleValue(e.target.value)}>
        {this.props.data.get('rates', OrderedMap()).entrySeq().map((key: string) => {
          return (
            <option className="currency-wrapper" key={key[1]} value={key[0]}>
              {key[0]}
            </option>
          )
        })}
      </select>
  )}
}

export default Dropdown;
