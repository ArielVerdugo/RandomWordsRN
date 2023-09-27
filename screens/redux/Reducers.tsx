import {TYPES} from './Actions';

export const numberWordsReducer = (state = [], action: any) => {
  switch (action.type) {
    case TYPES.NUMBER_WORDS:
      return state.concat(action.payload);
    default:
      return state;
  }
};
