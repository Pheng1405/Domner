import { toast } from "react-toastify";
const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    userProfile : localStorage.getItem("access-token")
                ? JSON.parse(localStorage.getItem("access-token"))
                : [],
}
const authSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUser(state, action){
            state.userProfile = action.payload;
            localStorage.setItem("access-token", JSON.stringify(state.userProfile));

        },
        logoutUser(state, action){
            toast.error("Logging Out...", {position : "top-left"});
            state.userProfile = {};
            localStorage.setItem("access-token", JSON.stringify(state.userProfile));
        }
    }
});

export const {setUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;