import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService,
    getAllUsers, deleteUserService,
    editUserService, getTopDoctorHomeService,
    getAllDoctors, saveDetailDoctorService
} from '../../services/userService';
import { toast } from "react-toastify";

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            }
            else {
                dispatch(fetchGenderFail());
            }
        } catch (e) {
            dispatch(fetchGenderFail());
            console.log('fetch GenderFail error', e)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            }
            else {
                dispatch(fetchPositionFail());
            }
        } catch (e) {
            dispatch(fetchPositionFail());
            console.log('fetchPositionFail error', e)
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFail = () => ({
    type: actionTypes.FETCH_POSITION_FAIL
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            }
            else {
                dispatch(fetchRoleFail());
            }
        } catch (e) {
            dispatch(fetchRoleFail());
            console.log('fetchRoleFail error', e)
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFail = () => ({
    type: actionTypes.FETCH_ROLE_FAIL
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log('check create user redux', res)
            if (res && res.errCode === 0) {
                toast.success("Create new user succeed!")
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFail());
            }
        } catch (e) {
            dispatch(saveUserFail());
            console.log('saveUserFail error ', e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFail = () => ({
    type: actionTypes.CREATE_USER_FAIL
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users));
            }
            else {
                dispatch(fetchAllUsersFail());
            }
        } catch (e) {
            dispatch(fetchAllUsersFail());
            console.log('fetchAllUsersFail error', e)
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFail = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAIL
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success('Deleted succesfully!')
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            }
            else {
                dispatch(deleteUserFail());
            }
        } catch (e) {
            dispatch(deleteUserFail());
            console.log('deleteAUserFail error', e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFail = () => ({
    type: actionTypes.DELETE_USER_FAIL
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success('Edited succesfully!')
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            }
            else {
                dispatch(editUserFail());
            }
        } catch (e) {
            dispatch(editUserFail());
            console.log('Edit User fail error', e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFail = () => ({
    type: actionTypes.EDIT_USER_FAIL
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAIL
                });
            }
        } catch (e) {
            console.log('Edit User fail error', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAIL
            })
        }
    }
}

export const fetchALLDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAIL
                });
            }
        } catch (e) {
            console.log('Edit User fail error', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAIL
            })
        }
    }
}

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            if (res && res.errCode === 0) {
                toast.success('saved succesfully!')
                dispatch({
                    type: actionTypes.SAVE_DOCTOR_DETAILS_SUCCESS
                })
            }
            else {
                dispatch({
                    type: actionTypes.SAVE_DOCTOR_DETAILS_FAIL
                });
            }
        } catch (e) {
            console.log('SAVE_DOCTOR_DETAILS_FAIL', e)
            dispatch({
                type: actionTypes.SAVE_DOCTOR_DETAILS_FAIL
            })
        }
    }
}




