import initialState from 'stores/initialState'

import {
	USER_SETDATA,
	USER_LOGOUT,
	USER_SET_CURRENT_SCREEN
} from 'actions/userActions'

var userReducer = function (state = initialState.user, action) {
    //console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        
    	case USER_SETDATA:
            //console.log("set data", action.userData)
            var newState = JSON.parse(JSON.stringify(state));
        	newState.name = action.userData.name;
            newState.id = action.userData.id;
            newState.profileImg = action.userData.profileImg;

            return newState;
            
        case USER_LOGOUT:
        	console.log("logout", initialState.user);
        	return initialState.user;

        case USER_SET_CURRENT_SCREEN:

        	console.log("Changing screen", action.id);
        	var newState = JSON.parse(JSON.stringify(state));
        	newState.currentActive.screenType = action.screenType;
        	newState.currentActive.id = action.id;

        	return newState;

        default:
            return state;
    }
};

module.exports = userReducer;