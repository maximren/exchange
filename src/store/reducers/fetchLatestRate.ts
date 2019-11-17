import { OrderedMap, Map } from 'immutable';

const initialState = Map({
  data: OrderedMap(),
  exchangedValue: OrderedMap(),
})

export default (state = initialState, action: any) => {
  switch(action.type) {
    case "FETCH_LATEST_RATE":
      return state.set("data", action.payload)
    case "SPECIFIC_CURRENCY_RATE":
      return state.set("exchangedValue", action.payload)
    default:
      return state;
  }
}