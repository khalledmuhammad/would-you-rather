import React from 'react'
import { useSelector } from 'react-redux';


function LeaderBoard() {
    const users = useSelector(state=>state.Users.user)
    const userRank =  Object.keys(users)
    .sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) 
        - (users[a].questions.length + Object.keys(users[a].answers).length))
        
        console.log(userRank)

    return (
        <div>
            <h1>leaderBoard</h1>
            <ul style={{listStyle : "none" }}>
            {
                userRank.map(username =>
                    
                    <li  style={{ margin:"10px"}} key={Math.random()}>{username} :{Object.keys(users[username].answers).length+users[username].questions.length}</li>
                
                )
            }
            </ul>
        </div>
    )
}

export default LeaderBoard
