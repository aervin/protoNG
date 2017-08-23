import { ACTION } from './feature.action';
import { IAppState, ISettlementsState } from './feature.state';
export function featureReducer(state, action) {
	switch (action.type) {
		default:
			return {
				settlements: settlementsReducer(state, action)
			}
	}
}

function settlementsReducer(state: IAppState, action: {type: string, data: any}): ISettlementsState {

	switch(action.type) {
		case ACTION.SETTLEMENTS.RECEIVED_CONTRACTORS_DATA: {
			let newState = { ...state.settlements }
			newState.contractors = action.data
			return newState
		}

		case ACTION.SETTLEMENTS.RECEIVED_CONTRACTOR_DETAILS: {
			let newState = { ...state.settlements }
			newState.details = action.data
			return newState
		}

		case ACTION.SETTLEMENTS.SET_ACTIVE_CONTRACTOR: {
			let newState = { ...state.settlements }
			newState.activeContractor = action.data.id
			return newState
		}

		case ACTION.SETTLEMENTS.SETTLEMENTS_TOGGLE_DETAILS_LOADING: {
			let newState = { ...state.settlements }
			newState.detailsLoading = !state.settlements.detailsLoading
			return newState
		}
	}
}