import React from 'react'
import {useParams , useHistory   } from "react-router-dom"
import { useSelector } from 'react-redux';
import {ProgressBar} from "react-bootstrap"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {handleAddAnswer} from "../store/shared"
import {useDispatch } from "react-redux"

function QuestionDetail(props) {
  
  const dispatch = useDispatch()
    const params = useParams()
    const history = useHistory()



 
    const questions = useSelector(state=>state.questions.question)
    

    const questid =  Object.keys(questions).includes( params.qid) ?  params.qid  : null
   

    

 
    console.log(questid)

    const authedUser = useSelector((state) => state.App.authedUser);

    const user = useSelector(state=>state.Users.user)
    const loggeduser = useSelector(state=>state.Users.user[authedUser]) 
  const   loggeduserAnswers = authedUser ? loggeduser.answers : "";

    


 
    return (
        
   <>
   
  
   <ul style={{listStyle:"none"}}>
{ 
!questid ? history.push("/notFound") : 
Object.values(questions).filter(e => questid.includes(e.id) ).map(q=>
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
        <h6 style={{color:"green"}}> <CheckCircleIcon /> {q.optionOne.text}</h6>
        <span>{q.optionOne.votes.length}out of 3</span>

        <ProgressBar striped variant="success" now={
            q.optionOne.votes.length === 1 ? 30 :  q.optionOne.votes.length ===2 ? 60 : q.optionOne.votes.length ===3 ? 100 : 0
        } />
      </div>

       <div className="answered">
        <h6 >{q.optionTwo.text}</h6>
        <span>{q.optionTwo.votes.length} out of 3</span>

        <ProgressBar striped variant="success" now={
                q.optionTwo.votes.length === 1 ? 30 :  q.optionTwo.votes.length ===2 ? 60 : q.optionTwo.votes.length ===3 ? 100 : 0

        } />
       </div>
        </div>

    :  <div style={{display:"flex" , flexDirection:"column" , padding:"10px"}}>
                
                <div className="answered">
                 <h6 >{q.optionOne.text}</h6>
                 <span>{q.optionOne.votes.length} out of 3</span>
                 <ProgressBar striped variant="success" now={
   q.optionOne.votes.length === 1 ? 30 :  q.optionOne.votes.length ===2 ? 60 : q.optionOne.votes.length ===3 ? 100 : 0

                 } />
                 </div>

                 <div className="answered">
                <h6  style={{color:"green"}}> <CheckCircleIcon /> {q.optionTwo.text}</h6>
                <span>{q.optionTwo.votes.length} out of 3</span>

                <ProgressBar striped variant="success" now={
            q.optionTwo.votes.length === 1 ? 30 :  q.optionTwo.votes.length ===2 ? 60 : q.optionTwo.votes.length ===3 ? 100 : 0
                    
                } />
            </div>

             </div>

           : < div style={{display:"flex" , flexDirection:"column" , padding:"10px"}}>
                 <div onClick={
                     ()=>{
  dispatch(handleAddAnswer({ authedUser : authedUser, qid : questid, answer : "optionOne" }) )
 
                         }} className="btn">
                             {q.optionOne.text}
                             </div>
                 <div  onClick={()=>{
  dispatch(handleAddAnswer({ authedUser : authedUser, qid : questid, answer : "optionTwo" }) )



                 }
                 } className="btn">{q.optionTwo.text}</div>

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
