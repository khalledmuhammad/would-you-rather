import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    name: "",
    avatarURL: "",
    answers: [] || null,
    questions: [] || null,
  },
};

const user = createSlice({
  name: "User",
  initialState,
  reducers: {
    recieveusers(state, action) {
      state.user = action.payload;
    },

    saveUserAnswer(state, action) {
      console.log(action.payload);
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          [authedUser]: {
            ...state.user[authedUser],
            answers: {
              ...state.user[authedUser].answers,
              [qid]: answer,
            },
          },
        },
      };
    },

    addQuestion(state, action) {
      console.log(action.payload)
      const formattedQuestion = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          [formattedQuestion.author]: {
            ...state.user[formattedQuestion.author],
            questions: state.user[formattedQuestion.author].questions.concat([formattedQuestion.id])


         
          },
        },
      };
      

    },

  },
 
});

export const UserActions = user.actions;
export default user.reducer;
