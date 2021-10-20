import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: {
    id: "",
    author: "",
    timestamp: 0,
    optionOne: {
      votes: [] || null,
      text: "",
    },
    optionTwo:
      {
        votes: [] || null,
        text: "",
      } || null,
  },
};
const Question = createSlice({
  name: "question",
  initialState,
  reducers: {
    saveQuestion(state, action) {
      state.question = action.payload;
    },

    saveAnswer(state, action) {
      console.log(action.payload);
      const { authedUser, qid, answer } = action.payload;

      return {
        ...state,

        question: {
          ...state.question,
          [qid]: {
            ...state.question[qid],
            [answer]: {
              ...state.question[qid][answer],
              votes: state.question[qid][answer].votes.concat([authedUser]),
            },
          },
        },
      };
    },
    addQuestion(state, action) {
      const formattedQuestion = action.payload

      return {
        ...state , 
        question : {
          ...state.question , 
      [formattedQuestion.id]: formattedQuestion ,
      


        }
      }
         
      
    },
  },
});
export const QuestionActions = Question.actions;
export default Question.reducer;
