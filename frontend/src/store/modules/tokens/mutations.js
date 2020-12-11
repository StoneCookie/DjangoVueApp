import {
    AUTH_REQUEST,
    AUTH_REFRESH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_REFRESH_SUCCESS,
    AUTH_LOGOUT,
    AUTH_REFRESH_ERROR,
    FIRST_AUTH_REQUEST_SUCCESS,
} from '@/store/action-types/tokens'

const mutations = {
    [AUTH_REQUEST]: state => {
        state.tokenStatus = 'loading'
    },
    [FIRST_AUTH_REQUEST_SUCCESS]: state => {
        state.firstRequestSuccess = true
    },
    [AUTH_REFRESH_REQUEST]: state => {
        state.tokenStatus = 'refreshing'
    },
    [AUTH_SUCCESS]: (state, { accessToken, user, csrfToken }) => {
        state.tokenStatus = 'success'
        state.accessToken = accessToken
        state.user = user
        state.csrfToken = csrfToken
    },
    [AUTH_REFRESH_SUCCESS]: (state, { accessToken }) => {
        state.tokenStatus = 'success'
        state.accessToken = accessToken
    },
    [AUTH_ERROR]: state => {
        state.tokenStatus = 'error'
    },
    [AUTH_REFRESH_ERROR]: state => {
        state.tokenStatus = 'error'
        state.accessToken = null
        state.csrfToken = null
        state.firstRequestSuccess = false
    },
    [AUTH_LOGOUT]: state => {
        state.tokenStatus = ''
        state.accessToken = null
        state.csrfToken = null
        state.firstRequestSuccess = false
    },
}

export default mutations
