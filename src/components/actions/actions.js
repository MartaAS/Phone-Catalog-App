import axios from 'axios';


export const FETCH_MOBILES_FULFILLED = 'FETCH_MOBILES_FULFILLED';

export function fetchMobiles() {
  return function (dispatch) {
    axios.get('http://localhost:8001/phone')
      .then(response => response.data)
      .then(mobiles => dispatch({
        type: FETCH_MOBILES_FULFILLED,
        payload: mobiles
      }))
  }
}


export const showMobileDetails = (mobileId) => ({
  type: 'SHOW-MOBILE-DETAILS',
  payload: mobileId
})


export const hideMobileDetails = () => (
  {
    type: 'HIDE-MOBILE-DETAILS',
  }
)
