import { Map, List } from 'immutable';

const initialState = Map({
  data: List(),
  fetched: false,
})

export default (state = initialState, action: any) => {
  switch(action.type) {
    case "FETCH_LATEST_RATE":
      return state.set("data", action.payload)
                  .set("fethced", true);
  }
}