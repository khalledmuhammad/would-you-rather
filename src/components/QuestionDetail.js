import React from 'react'
import {useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
import {ProgressBar} from "react-bootstrap"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {handleAddAnswer} from "../store/shared"
import {useDispatch } from "react-redux"

function QuestionDetail() {
  const dispatch = useDispatch()
    const params = useParams()
    const questid = params.qid
    const authedUser = useSelector((state) => state.App.authedUser);

    const user = useSelector(state=>state.Users.user)
    const loggeduser = useSelector(state=>state.Users.user[authedUser]) 
  const   loggeduserAnswers = authedUser ? loggeduser.answers : "";

    
    
  const questions = useSelector(state=>state.questions.question)
  const optionOne = useSelector(state=>state.questions.question[questid].optionOne.text)
  const optionTwo = useSelector(state=>state.questions.question[questid].optionTwo.text)
  const OpOneCount = useSelector(state=>state.questions.question[questid].optionOne.votes)
  const OpTwoCount =useSelector(state=>state.questions.question[questid].optionTwo.votes)



  const questionTomap = Object.values(questions).filter(e => questid.includes(e.id)) 
  
  


  console.log(authedUser , questid )
  

  

 
    return (
        
   <>
   <ul style={{listStyle:"none"}}>
{ 

       questionTomap.map(q=>
         <li key={q.id}>
         <div className="ui cards">
         <div className="card">
           <div className="content">
               <img className="right floated mini ui image" alt="userImage" src={user[q.author].avatarURL}/>
             <div className="header">
               {q.author} Asks : 
             </div>
             
             <div style={{textAlign:"center"}} className="description">
               <h6>Would you rather ?</h6>
             </div>
            
           </div>
           <div className="extra content">
           { Object.keys(loggeduserAnswers).includes(questid)   ? 
        loggeduserAnswers[questid] === "optionOne" ? 
         <div style={{display:"flex" , flexDirection:"column" , padding:"10px"}}>
      
      <div className="answered"> 
        <h6 style={{color:"green"}}> <CheckCircleIcon /> {optionOne}</h6>
        <span>{OpOneCount.length}out of 3</span>

        <ProgressBar striped variant="success" now={
            OpOneCount.length === 1 ? 30 :  OpOneCount.length ===2 ? 60 : OpOneCount.length ===3 ? 100 : 0
        } />
      </div>

       <div className="answered">
        <h6 >{optionTwo}</h6>
        <span>{OpTwoCount.length} out of 3</span>

        <ProgressBar striped variant="success" now={
                OpTwoCount.length === 1 ? 30 :  OpTwoCount.length ===2 ? 60 : OpTwoCount.length ===3 ? 100 : 0

        } />
       </div>
        </div>

    :  <div style={{display:"flex" , flexDirection:"column" , padding:"10px"}}>
                
                <div className="answered">
                 <h6 >{optionOne}</h6>
                 <span>{OpOneCount.length} out of 3</span>
                 <ProgressBar striped variant="success" now={
   OpOneCount.length === 1 ? 30 :  OpOneCount.length ===2 ? 60 : OpOneCount.length ===3 ? 100 : 0

                 } />
                 </div>

                 <div className="answered">
                <h6  style={{color:"green"}}> <CheckCircleIcon /> {optionTwo}</h6>
                <span>{OpTwoCount.length} out of 3</span>

                <ProgressBar striped variant="success" now={
            OpTwoCount.length === 1 ? 30 :  OpTwoCount.length ===2 ? 60 : OpTwoCount.length ===3 ? 100 : 0
                    
                } />
            </div>

             </div>

           : < div style={{display:"flex" , flexDirection:"column" , padding:"10px"}}>
                 <div onClick={
                     ()=>{
  dispatch(handleAddAnswer({ authedUser : authedUser, qid : questid, answer : "optionOne" }) )
 
                         }} className="btn">
                             {optionOne}
                             </div>
                 <div  onClick={()=>{
  dispatch(handleAddAnswer({ authedUser : authedUser, qid : questid, answer : "optionTwo" }) )



                 }
                 } className="btn">{optionTwo}</div>

             </div>}
           </div>
         </div> 
       
       </div>
       </li>
         )

}
            </ul>

</>
    )
}

export default QuestionDetail
