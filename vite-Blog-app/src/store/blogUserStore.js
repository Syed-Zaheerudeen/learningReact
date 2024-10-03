import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";

const blogUserStore = configureStore({
    reducer:  {
        authSlice,
    },
});


export default blogUserStore;