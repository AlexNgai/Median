import initialState from 'stores/initialState'

import {
	CHANNEL_SETDATA
} from 'actions/channelActions'

var channelReducer = function (state = initialState.channels, action) {
    //console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        case CHANNEL_SETDATA:
            return JSON.parse(JSON.stringify(action.channelData));

        default:
            return state;
    }
};

module.exports = channelReducer;
