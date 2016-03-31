export const CHANNEL_SETDATA = 'CHANNEL_SETDATA'

//ACTION CREATORS
export function channel_setChannelData( channelData ){

  return {
		type: CHANNEL_SETDATA,
		channelData
	}
}


/*export const user_setUserData = (userData) => {
  return {
    type: USER_SETDATA,
    userData
  }
}*/