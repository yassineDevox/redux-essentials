import { get } from "lodash"

export const getCounterByOneSelector = 
state => {
    console.log(state)
    return state.counter.byOne.value
}
