type InitStateType = {
    color: string,
    themes: string[]
}

const initState: InitStateType = {
    color: 'some',
    themes: ['dark', 'red', 'some', 'dark-text', 'red-text', 'some-text']
};

export const themeReducer = (state = initState, action: changeThemeActionType): InitStateType => {
    switch (action.type) {
        case "CHANGING-COLOR": {
            return {
                ...state,
                color: action.color
            };
        }
        default:
            return state;
    }
}

type changeThemeActionType = {
    type: 'CHANGING-COLOR'
    color: string
}

export const changeThemeC = (color: string): changeThemeActionType => {
    return {type: "CHANGING-COLOR", color}
}