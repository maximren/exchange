import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { OrderedMap } from 'immutable';

import { fetchLatestRate, exchangeRate } from '../../store/actions/fetchLatestRate';
import Dropdown from '../Dropdown';
import { IProps, IState, IStateToProps, IDispatchToProps } from './interface';

import './ExchangeComponents.scss';

class ExchangeComponents extends PureComponent<IProps, IState> {

  static defaultProps = {
    fetchLatestRate: () => null,
    data: OrderedMap<string, any>(),
    exchangedValue: OrderedMap<string, any>(),
  }

  state = {
    firstValue: '',
    secondValue: '',
    amount: '',
  }

  componentDidMount() {
    this.props.fetchLatestRate('USD');
  }

  handleFirstValue = (value: string) => {
    this.setState({ firstValue: value });
  }

  handleSecondValue = (value: string) => {
    this.setState({ secondValue: value });
  }

  handleChange = (e: any) => {
    this.setState({ amount: e.target.value })
  }

  render() {
    const { firstValue, secondValue, amount } = this.state;
    const { data, exchangeRate, exchangedValue } = this.props;
    return (
      <div className="main-container">
        <h1>Exchange specific currency for specific amount</h1>
        <span className="description">Choose different currencies on "From" and "To" fields, enter amount and click button</span>
        <div className="form-contaienr">
          <div className="dropdown-container">
            <span>From: <Dropdown handleValue={this.handleFirstValue} data={data} /></span>
            <span>To: <Dropdown handleValue={this.handleSecondValue} data={data} /></span>
          </div>
          <form>
            <label>Amount: </label>
            <input name="amount" value={this.state.amount} onChange={this.handleChange} className="input" />
          </form>
          <button className="button" onClick={() => exchangeRate(amount, firstValue, secondValue)}>Get exchanged value</button>
            {exchangedValue && (
              <div className="currency-wrap">
                  <div className="currency-label">Your currency value is:</div>
                  <div className="currency-value">{exchangedValue.get("rates", OrderedMap()).entrySeq().map(([key, value]: [string, number]) => {
                    return(
                      <>
                        <span>{key}</span>
                        <span>{value}</span>
                      </>
                    )
                  })}</div>
              </div>
              )
            }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  data: state.getIn(["fetchLatestRate", "data"]),
  exchangedValue: state.getIn(["fetchLatestRate", "exchangedValue"])
})

const mapDispatchToProps = {
  fetchLatestRate,
  exchangeRate
}

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(ExchangeComponents);
