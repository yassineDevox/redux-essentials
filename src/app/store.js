import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../features/Counter/slice"

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store