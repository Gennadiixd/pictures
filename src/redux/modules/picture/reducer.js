import * as C from './consts';
import { removeByIndex, addToArray} from './../../../helpers/immutable-helpers';

const initState = {
  loading: false,
  error: false,
  initState: true,
  history: [],
};

const picture = (state = initState, action) => {
  switch (action.type) {
    case C.GET_PICTURE_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
        initState: false,
      };
    case C.GET_PICTURE_SUCCESS:
      return {
        ...state,
        loading: false,
        history: addToArray(state.history, action.payload)
      };
    case C.GET_PICTURE_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case C.REMOVE_HISTORY_ITEM:
      const { index } = action.payload;
      return {
        ...state,
        history: removeByIndex(state.history, index),
      };
    default:
      return state;
  }
}

export default picture;