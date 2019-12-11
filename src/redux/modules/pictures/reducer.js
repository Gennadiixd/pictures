import * as C from './consts';

const initState = {};

const pictures = (state = initState, action) => {
  switch (action.type) {
    case C.TEST:
      return {
        ...state,
      };
    // case C.TEST:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
}

export default pictures;