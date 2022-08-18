import {ILoadingState, loadingReducer, ToggleIsLoadingAC} from "./loadingReducer";

let startState: ILoadingState

beforeEach(() => {
    startState = {
        isLoading: false
    }
})

test('isLoading should be correct value', () => {
    expect(loadingReducer(startState, ToggleIsLoadingAC(true)).isLoading).toBe(true)
    expect(loadingReducer(startState, ToggleIsLoadingAC(false)).isLoading).toBe(false)
})