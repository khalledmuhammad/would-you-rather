import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    authedUser: "",
    loading : true,
    loggedIn: false
    }


const App = createSlice({

    name : "App",
    initialState , 
    reducers : {
        setAuthedUser: (state, action) => {
            state.authedUser = action.payload
          },
          stopLoading (state){
            state.loading = false;},
          setLoggedin(state){
              state.loggedIn = true
          },  
          setLogOut(state){
            state.loggedIn = false
            state.authedUser= ""
        } 

    }
})
export const AppActions = App.actions;
export default App.reducer;
