import $ from 'jquery'

export default function addLocation(props, currentUser) {
  debugger
  const URL = 'http://localhost:3000/api/v1/locations'
  const USER_ID = currentUser.currentUser.id
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({
      location: props,
      user_id: USER_ID
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    debugger
    return {
      type: 'ADD_LOCATION',
      payload: response
    }
  })

}