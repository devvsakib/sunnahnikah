//Production URL
// export const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

export const BASE_API_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}`;

export const API_PATHS = {
    LOGIN: BASE_API_URL + 'auth/login',
    REGISTER: BASE_API_URL + 'auth/register',
    LOGOUT: BASE_API_URL + 'auth/logout',
    GET_ALL_USERS: BASE_API_URL + 'users',
    GET_USER_BY_ID: BASE_API_URL + 'users',
    DELETE_USER_BY_ID: BASE_API_URL + 'users',
    UPDATE_BASIC_INFORMATION: BASE_API_URL + 'users/basic-information',
    UPDATE_PARTNER_EXPECTATION: BASE_API_URL + 'users/partner-expectation',
    UPDATE_FAMILY_INFORMATION: BASE_API_URL + 'users/family-information',
    UPDATE_PHYSICAL_ATTRIBUTES: BASE_API_URL + 'users/€physical-attributes',
    UPDATE_ADDRESS: BASE_API_URL + 'users/address',
    ADD_EDUCATION: BASE_API_URL + 'users/education',
    UPDATE_EDUCATION: BASE_API_URL + 'users/education/:educationID',
    DELETE_EDUCATION: BASE_API_URL + 'users/education/:educationID',
    UPDATE_HOBBIES: BASE_API_URL + 'users/hobbies',
    UPDATE_LANGUAGES: BASE_API_URL + 'users/languages',
    ADD_CAREER: BASE_API_URL + 'users/career',
    UPDATE_CAREER: BASE_API_URL + 'users/career',
    DELETE_CAREER: BASE_API_URL + 'users/career',
    UPDATE_LIFESTYLE: BASE_API_URL + 'users/lifestyle',
    UPDATE_PERSONAL_ATTITUDE: BASE_API_URL + 'users/personal-attitude',
    UPDATE_SPIRITUAL_SOCIAL_BG: BASE_API_URL + 'users/spiritual-social-bg',
    GET_SHORTLISTED_USERS: BASE_API_URL + 'users/shortlist',
    SHORTLIST_USER: BASE_API_URL + 'users/shortlist',
    REMOVE_USER_FROM_SHORTLIST: BASE_API_URL + 'users/remove-from-shortlist',
    GET_MY_INTEREST_USERS: BASE_API_URL + 'users/interest',
    ADD_INTERESTED_USER: BASE_API_URL + 'users/interest',
    REMOVE_USER_FROM_MY_INTEREST: BASE_API_URL + 'users/remove-from-interest',
    UPDATE_ACCOUNT_TYPE: BASE_API_URL + 'users/account-type',
    GET_ALL_USERS_BY_FILTER: BASE_API_URL + 'users/filter',
    GET_ALL_USERS_BY_SEARCH: BASE_API_URL + 'users/search',
    GET_ALL_USERS_BY_SORT: BASE_API_URL + 'users/sort',
    GET_ALL_USERS_BY_PAGINATION: BASE_API_URL + 'users/pagination'
}

export const METHOD = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    UPDATE: 'UPDATE',
    PUT: 'PUT'
}