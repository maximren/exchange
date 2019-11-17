import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { OrderedMap } from 'immutable';

import { fetchLatestRate } from '../../store/actions/fetchLatestRate';
import { IStateToProps, IDispatchToProps, IProps, IState } from './interface';

import './LatestRateComponent.scss'

class LatestRateComponent extends PureComponent<IProps, IState> {
  static defaultProps = {
    fetchLatestRate: () => null,
    data: OrderedMap<string, any>(),
  }

  state = {
    currency: "USD"
  }

  componentDidMount() {
    this.props.fetchLatestRate(this.state.currency);
  }

  handleClick = (key: string) => {
    this.setState({ currency: key })
    this.props.fetchLatestRate(key)
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="main-title">Base currency is : {this.props.data.get("base")}</h1>
        <span className="description">Click on the specific currency to check rate base on it. Default amount is 1. The data refreshes around 16:00 CET every working day.</span>
        <div className="currencies-container">{this.props.data.get('rates', OrderedMap()).entrySeq().map(([key, value]: [string, number]) => {
          return (
            <div className="currency-wrapper" onClick={() => this.handleClick(key)} key={value}>
              <span className="currency">{key}</span>
              <span className="currency">{value}</span>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  data: state.getIn(["fetchLatestRate", "data"]),
})

const mapDispatchToProps = {
  fetchLatestRate
}

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(LatestRateComponent);
