const initState : initStateType = {
    themeId: 1,
}

type initStateType = {
    themeId: number
}

type ActionsType = changeThemeIdType

export const themeReducer = (state = initState, action: ActionsType): initStateType  => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}



type changeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
