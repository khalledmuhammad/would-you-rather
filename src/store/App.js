import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    authedUser: null,
    loading : true,
    loggedIn: false,
    notFound : "/"
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
        } ,
        setNotFound(state, action){
            state.notFound = action.payload
        } 


    }
})
export const AppActions = App.actions;
export default App.reducer;
