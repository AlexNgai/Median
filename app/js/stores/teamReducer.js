import initialState from 'stores/initialState'

var teamReducer = function (state = initialState.team, action) {
    //console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
};

module.exports = teamReducer;