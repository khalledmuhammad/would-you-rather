import React from 'react'
import Button from '@mui/material/Button'


function QuestionList(props) {

    return (
        <div className="ui cards">
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" alt="userFace" src={props.avatar} />
      <div className="header">
        {props.username}
      </div>
      <div className="meta">
        Friends of Veronika
      </div>
      <div className="description">
          {props.question}
      </div>
    </div>
    <div className="extra content">
      <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}} className="ui two buttons">
      <Button variant="contained" style={{margin : "10px"}} color="success">
  approve
</Button>

      </div>
    </div>
  </div>
  
</div>
    )
}

export default QuestionList
