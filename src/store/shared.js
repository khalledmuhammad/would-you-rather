import { getInitialData } from "../utils/api";
import { QuestionActions } from "./questionStore";
import { AppActions } from "./App";
import { UserActions } from "./UsersStore";
import {saveQuestionAnswer } from "../utils/api"
import {saveQuestion } from "../utils/api"

const AUTHED_ID = null;


export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({users, questions})=>{
            dispatch(UserActions.recieveusers(users))
            dispatch(QuestionActions.saveQuestion(questions))
            dispatch(AppActions.setAuthedUser(AUTHED_ID))
            dispatch(AppActions.stopLoading())

        })

    }
}

export function handleAddAnswer (authedUser,  qid, answer ) {
    return (dispatch)=>{
        return saveQuestionAnswer(authedUser,  qid, answer).then(
            () => {
                dispatch(QuestionActions.saveAnswer(authedUser,  qid, answer))
                dispatch(UserActions.saveUserAnswer(authedUser,  qid, answer))
            }
        )
    }
}
    
export function handleAddQuestion(question) {
    return (dispatch)=>{
        return saveQuestion(question).then(
            (formattedQuestion)=>{
                dispatch(QuestionActions.addQuestion(formattedQuestion))
                dispatch(UserActions.addQuestion(formattedQuestion))


            }
        )
    }
}
