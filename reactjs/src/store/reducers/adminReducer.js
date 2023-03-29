import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
    allDoctors: []

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('action GenderStart: ', action);
            return {
                ...state
            }

        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            console.log('fire fetch gender success: ', state)
            return {
                ...state
            }

        case actionTypes.FETCH_GENDER_FAIL:
            console.log('action GenderFail: ', action);
            return {
                ...state
            }

        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            console.log('fire fetch position success: ', state)
            return {
                ...state
            }

        case actionTypes.FETCH_POSITION_FAIL:
            console.log('action position: ', action);
            return {
                ...state
            }

        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            console.log('fire fetch role success: ', state)
            return {
                ...state
            }

        case actionTypes.FETCH_ROLE_FAIL:
            console.log('action position: ', action);
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            console.log('fire fetch all success: ', state)
            state.users = action.users;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_USERS_FAIL:
            state.users = [];
            return {
                ...state
            }

        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            console.log('fire fetch get top doctor: ', state)
            state.topDoctors = action.dataDoctors;
            return {
                ...state
            }

        case actionTypes.FETCH_TOP_DOCTORS_FAIL:
            state.topDoctors = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
            console.log('fire fetch get all doctor: ', state)
            state.allDoctors = action.dataDr;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_DOCTORS_FAIL:
            state.topDoctors = [];
            return {
                ...state
            }

        default:
            return state;
    }
}

export default adminReducer;