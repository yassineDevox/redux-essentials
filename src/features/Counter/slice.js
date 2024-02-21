import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counterName",
    initialState: {
        byOne: { value: 0 }
    },
    reducers: {
        incrementByOne: state => {
            state.value += 1
        },
        decrementByOne: state => {
            state.value -= 1
        },
    }
})

export const { incrementByOne, decrementByOne } = counterSlice.actions

export default counterSlice.reducer