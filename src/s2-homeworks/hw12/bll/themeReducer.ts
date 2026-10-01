const initState: ThemeState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdAction): ThemeState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }
        default:
            return state
    }
}

export const changeThemeIdAC = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

export type ChangeThemeIdAction = ReturnType<typeof changeThemeIdAC>
export type ThemeState = { themeId: number }
