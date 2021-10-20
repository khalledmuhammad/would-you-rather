import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import UserReducer from './store/UsersStore';
import QuestionReducer from "./store/questionStore";
import AppReducer from "./store/App";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer : {
    Users : UserReducer , 
    questions : QuestionReducer ,
    App : AppReducer
  }
})

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter >

    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


