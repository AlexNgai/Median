import initialState from 'stores/initialState'

import {
	PATIENT_SETDATA
} from 'actions/patientActions'

var patientReducer = function (state = initialState.patients, action) {
    //console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        case PATIENT_SETDATA:
            console.log("set patient data", action.patientData);
            return JSON.parse(JSON.stringify(action.patientData));

        default:
            return state;
    }
};

module.exports = patientReducer;