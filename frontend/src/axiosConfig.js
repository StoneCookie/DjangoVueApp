import axios from 'axios'
import { getCookie } from '@/utils/cookies'

const AXIOS_YG_API = axios.create({
    timeout: 2000,
})

if (getCookie('csrftoken') !== null)
    AXIOS_YG_API.defaults.headers['X-CSRFToken'] = getCookie('csrftoken')

export { AXIOS_YG_API }
