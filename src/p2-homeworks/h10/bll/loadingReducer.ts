const initState = {
    isLoading: false
}
type initStateType = typeof initState

export const loadingReducer = (state = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type ActionType = {
    type: 'LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): ActionType => ({
    type: "LOADING",
    isLoading
})
