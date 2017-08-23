const SettlementsActions: ISettlementsActions = {
    RECEIVED_CONTRACTORS_DATA: 'RECEIVED_CONTRACTORS_DATA',
    RECEIVED_CONTRACTOR_DETAILS: 'RECEIVED_CONTRACTOR_DETAILS',
    SET_ACTIVE_CONTRACTOR: 'SET_ACTIVE_CONTRACTOR',
    SETTLEMENTS_TOGGLE_DETAILS_LOADING: 'SETTLEMENTS_TOGGLE_DETAILS_LOADING'
}

export const ACTION = {
    SETTLEMENTS: SettlementsActions
}

interface ISettlementsActions {
    RECEIVED_CONTRACTORS_DATA: string,
    RECEIVED_CONTRACTOR_DETAILS: string,
    SET_ACTIVE_CONTRACTOR: string,
    SETTLEMENTS_TOGGLE_DETAILS_LOADING: string
}