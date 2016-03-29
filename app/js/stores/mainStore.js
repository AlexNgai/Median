//MAIN STORE for App
import initialState from 'stores/initialState'

import userReducer from 'stores/userReducer'
import channelReducer from 'stores/channelReducer'
import patientReducer from 'stores/patientReducer'
import teamReducer from 'stores/teamReducer'

import { createStore, combineReducers } from 'redux'

//COMBINE REDUCERS INTO SINGLE STORE
var reducer = combineReducers({
    user: userReducer,
    channels: channelReducer,
    patients: patientReducer,
    team: teamReducer
});

var mainStore = createStore(reducer);

module.exports = mainStore;





/*var Redux = require('redux');

//reducers
var todo = function(state, action){
    switch(action.type){
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed:false
            };
        case 'TOGGLE_TODO':
            if(state.id !== action.id){
                return state;
            }
            return {
                id: action.id,
                text: action.text,
                completed: !action.completed
            };
        default:
            return state;
    }
};
var todos = function(state, action){
    if(!state){
        state = [];
    }
    switch(action.type){
        case 'ADD_TODO':
            return state.concat(todo(undefined, action));
        case 'TOGGLE_TODO':
            return state.map(function(t){
                todo(t, action)
            });
        default:
            return state;
    }
};

var createStore = Redux.createStore;
var store = createStore(todos);

module.exports = store;*/