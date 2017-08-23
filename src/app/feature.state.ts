export interface IAppState {
    settlements: ISettlementsState
}

export interface ISettlementsState {
    contractors: ISettlementsContractor[]
    details: any
    weekEnding: number
    activeContractor: number
    detailsLoading: boolean
}

export interface ISettlementsContractor {
    Id: number
    BusinessName: string
    Gross: number
    Net: number
    Deductions: number
    RouteCount: number
}

export const INITIAL_STATE: IAppState = {
    settlements: {
        contractors: undefined,
        details: undefined,
        weekEnding: undefined,
        activeContractor: -1,
        detailsLoading: false
    }
}