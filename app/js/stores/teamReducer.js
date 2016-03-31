import initialState from 'stores/initialState'

import {
	TEAM_SETDATA
} from 'actions/teamActions'

var teamReducer = function (state = initialState.team, action) {
    //console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        case TEAM_SETDATA:
            console.log("set team data", action.teamData);
            return JSON.parse(JSON.stringify(action.teamData));

        default:
            return state;
    }
};

module.exports = teamReducer;

