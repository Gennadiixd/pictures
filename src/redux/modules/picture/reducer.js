import * as C from './consts';

const initState = {
  loading: false,
  error: false,
  // payload: null,
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
        // payload: action.payload,
        history: [...state.history, { ...action.payload }]
      };
    case C.GET_PICTURE_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

export default picture;