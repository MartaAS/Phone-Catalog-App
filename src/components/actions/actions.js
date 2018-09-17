export const showMobileDetails = (mobileId) => (
  {
    type: 'SHOW-MOBILE-DETAILS',
    payload: mobileId
  }
)


export const hideMobileDetails = (mobileId) => (
  {
    type: 'HIDE-MOBILE-DETAILS'
  }
)