const initialState = {
  selectedMobile: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW-MOBILE-DETAILS':
      return Object.assign({}, state, { selectedMobile: action.payload });
    case 'HIDE-MOBILE-DETAILS':
      return Object.assign({}, state, { selectedMobile: null });

    default:
      return state
  }

}