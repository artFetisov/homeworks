import {IUserState} from "../HW8";

export enum SortEnumAction {
    SORT_UP = 'SORT-UP',
    SORT_DOWN = 'SORT-DOWN',
    CHECK_AGE = 'CHECK-AGE'
}

export interface SortUpAction {
    type: SortEnumAction.SORT_UP
}

export interface SortDownAction {
    type: SortEnumAction.SORT_DOWN
}

export interface CheckAgeAction {
    type: SortEnumAction.CHECK_AGE,
    payload: number
}

export type SortActions = SortUpAction | SortDownAction | CheckAgeAction

export const SortActionCreators = {
    sortUp: (): SortUpAction => ({type: SortEnumAction.SORT_UP}),
    sortDown: (): SortDownAction => ({type: SortEnumAction.SORT_DOWN}),
    checkAge: (payload: number): CheckAgeAction => ({type: SortEnumAction.CHECK_AGE, payload})
}

export const homeWorkReducer = (state: IUserState[], action: SortActions): IUserState[] => {
    switch (action.type) {
        case SortEnumAction.SORT_UP:
            return [...state.sort((a, b) => a.name.localeCompare(b.name))]

        case SortEnumAction.SORT_DOWN:
            return [...state.sort((a, b) => b.name.localeCompare((a.name)))]

        case SortEnumAction.CHECK_AGE:
            return state.filter(u => u.age >= action.payload)

        default:
            return state
    }
}