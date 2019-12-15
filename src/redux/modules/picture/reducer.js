import * as C from './consts';
import { fromJS } from "immutable";

const initState = fromJS({
  loading: false,
  error: false,
  initState: true,
  history: [],
});

const picture = (state = initState, action) => {
  switch (action.type) {
    case C.GET_PICTURE_REQUEST:
      return state
        .setIn(['loading'], true)
        .setIn(['error'], false)
        .setIn(['initState'], false)
    case C.GET_PICTURE_SUCCESS:
      return state
        .updateIn(['history'], arr => arr.push(fromJS(action.payload)))
        .setIn(['loading'], false)
    case C.GET_PICTURE_FAIL:
      return state
        .setIn(['error'], true)
        .setIn(['loading'], false)
    case C.REMOVE_HISTORY_ITEM:
      const { index } = action.payload;
      return state.deleteIn(['history', index])
    default:
      return state;
  }
}

export const getData = state => state.getIn(["loading", "error", "history", "initState"]);

export default picture;