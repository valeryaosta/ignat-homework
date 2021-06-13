import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1;
                else if (a.name < b.name) return -1;
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(a => a.age >= action.payload)
        }
        default:
            return state
    }
}

type ActionsType =
    { type: 'sort', payload: 'up' }
    | { type: 'sort', payload: 'down' }
    | { type: 'check', payload: number }

