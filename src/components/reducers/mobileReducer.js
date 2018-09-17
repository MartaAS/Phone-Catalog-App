const initialState = {
  selectedMobile: null,
  listMobiles: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW-MOBILE-DETAILS':
      return Object.assign({}, state, { selectedMobile: action.payload });
    case 'HIDE-MOBILE-DETAILS':
      return Object.assign({}, state, { selectedMobile: null });
    case 'FETCH_MOBILES_FULFILLED':
      return Object.assign({}, state, { listMobiles: action.payload });

    default:
      return state
  }

}