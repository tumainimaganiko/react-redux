import { configureStore } from "@reduxjs/toolkit";

const store = () => {
    reducer: {
        user: userReducer
    }
}

export default store;