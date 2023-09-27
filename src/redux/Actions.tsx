export const TYPES = {
  NUMBER_WORDS: 'NUMBER_WORDS',
};

const numberWords = (words: string[]) => ({
  type: TYPES.NUMBER_WORDS,
  payload: words,
});

export const saveWords = (words: string) => (dispatch: any) => {
  dispatch({
    type: 'NUMBER_WORDS',
    payload: words,
  });
};
