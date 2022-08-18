export interface ILoadingState {
    isLoading: boolean
}

enum LoadingEnumAction {
    TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING'
}

interface SetIsLoadingAction {
    type: LoadingEnumAction.TOGGLE_IS_LOADING,
    value: boolean
}

const initState: ILoadingState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: SetIsLoadingAction): ILoadingState => {
    switch (action.type) {
        case LoadingEnumAction.TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        default:
            return state
    }
}

export const ToggleIsLoadingAC = (value: boolean): SetIsLoadingAction => ({
    type: LoadingEnumAction.TOGGLE_IS_LOADING,
    value
})