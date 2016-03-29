import initialState from 'stores/initialState'

var channelReducer = function (state = initialState.channels, action) {
    //console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
};

module.exports = channelReducer;