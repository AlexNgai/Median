export const USER_LOGIN = 'USER_LOGIN'
export const USER_SIGNUP = 'USER_SIGNUP'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_SETDATA = 'USER_SETDATA'
export const USER_SET_CURRENT_SCREEN = 'USER_SET_CURRENT_SCREEN'

//ACTION CREATORS
export function user_signUp( userData ) {
  	return {
    	type: USER_SIGNUP,
    	userData
  	}
}

export function user_login( loginInfo ) {
 	return {
   	 	type: USER_LOGIN,
    	loginInfo
  	}
}

export function user_logout() {
  	return {
    	type: USER_LOGOUT
  	}
}

export function user_setUserData( userData ){
	return {
		type: USER_SETDATA,
		userData
	}
}

export function user_setCurrentScreen( screenType, id ){
	return {
		type: USER_SET_CURRENT_SCREEN,
		screenType,
		id
	}
}

/*export const user_setUserData = (userData) => {
  return {
    type: USER_SETDATA,
    userData
  }
}*/