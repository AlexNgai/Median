import initialState from 'stores/initialState'

var patientReducer = function (state = initialState.patients, action) {
    //console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
};

module.exports = patientReducer;