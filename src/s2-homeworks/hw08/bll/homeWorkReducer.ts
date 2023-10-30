import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state].sort((a, b) => a.name.localeCompare(b.name))
            if(action.payload === 'up'){
                return newState
            }else{
                return newState.reverse()
            }
        }
        case 'check': {
            return state.filter((el) => el.age >= 18)
        }
        default:
            return state
    }
}
