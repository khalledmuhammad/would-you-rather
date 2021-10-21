import React from 'react'
import { useSelector } from 'react-redux';
import {Link } from "react-router-dom"



function Unansweredqs() {
    const questions = useSelector(state=>state.questions.question)
    const authedUser = useSelector((state) => state.App.authedUser);
    
    const user = useSelector(state=>state.Users.user)

    const questid =  Object.keys(questions)
    .filter((question) => !questions[question].optionOne.votes.includes(authedUser) && !questions[question].optionTwo.votes.includes(authedUser))
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp) 
    
    const questionTomap = Object.values(questions).filter(e => questid.includes(e.id)).sort((a, b) => b.timestamp - a.timestamp);
     console.log(questionTomap)
 

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
                <div style={{textAlign:"center"}} className="meta">
                  <h6>{q.optionOne.text}</h6>
                </div>
                </div>
                <div className="extra content">
                  <div className="ui two buttons">
                  <Link to={`/question/${q.id}`} className="ui basic blue button">Answer Question</Link>
                  </div>
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

export default Unansweredqs
