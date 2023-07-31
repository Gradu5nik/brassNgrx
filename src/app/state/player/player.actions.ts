import { createAction, props } from "@ngrx/store";

export const build = createAction(
    '[Player] build'
)
export const network = createAction(
    '[Player] network'
)
export const develop = createAction(
    '[Player] develop',
    props<{times:number}>()
)
export const sell = createAction(
    '[Player] sell'
)
export const loan = createAction(
    "[Player] loan"
)
export const scout = createAction(
    '[Player] scout'
)