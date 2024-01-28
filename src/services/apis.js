const BASE_URL = process.env.REACT_APP_BASE_URL
const visitorsToken = process.env.REACT_APP_VISITOR_VALID

export const visitors = {
    VISITOR_API: BASE_URL + 'createVisitorToken',
    visitorToken: visitorsToken
}

export const contectorInfo = {
    CONTECTOR_INFO :  BASE_URL + 'createContactorInfo',
}

export const recruiterInfo = {
    RECRUITER_INFO: BASE_URL + 'createRecruiterInfo'
}