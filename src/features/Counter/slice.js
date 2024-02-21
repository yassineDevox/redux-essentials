import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        byOne: { value: 0 }
    },
    reducers: {
        incrementByOne: state => {
            state.byOne.value += 1
        },
        decrementByOne: state => {
            state.byOne.value -= 1
        },
    }
})

export const getCounterValueSelector = state => state.counter.byOne.value

export const { incrementByOne, decrementByOne } = counterSlice.actions

export default counterSlice.reducer