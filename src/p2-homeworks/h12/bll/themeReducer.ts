export type ThemeType = 'dark' | 'red' | 'some'

export interface IThemeState {
    theme: ThemeType
}

export enum ThemeEnumAction {
    TOGGLE_THEME = 'TOGGLE-THEME'
}

export interface ToggleThemeAction {
    type: ThemeEnumAction
    theme: ThemeType
}

const initState: IThemeState = {
    theme: 'red'
};

export const themeReducer = (state = initState, action: ToggleThemeAction): IThemeState => { // fix any
    switch (action.type) {
        case ThemeEnumAction.TOGGLE_THEME: {
            return {
                ...state,
                theme: action.theme
            }
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: ThemeType): ToggleThemeAction => ({
    type: ThemeEnumAction.TOGGLE_THEME,
    theme
})