import initialState from 'stores/initialState'

import {
	USER_SETDATA,
	USER_LOGOUT
} from 'actions/userActions'

var userReducer = function (state = initialState.user, action) {
    //console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        
    	case USER_SETDATA:
            console.log("set data", action.userData)
            return {
            	name: action.userData.name,
            	id: action.userData.id,
            	profileImg: action.userData.profileImg
            };
        case USER_LOGOUT:
        	console.log("logout", initialState.user);
        	return initialState.user;

        default:
            return state;
    }
};

module.exports = userReducer;