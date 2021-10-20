import React  ,{useState} from 'react'
import { useSelector } from 'react-redux';
import {useDispatch } from "react-redux"
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useHistory } from "react-router-dom";
import { handleAddQuestion } from '../store/shared';



function NewQuestion() {
    const history = useHistory()
    const dispatch = useDispatch()
    const author = useSelector((state) => state.App.authedUser);

  const [optionOne , setOptionOne] = useState("")
  const [optionTwo , setOptionTwo] = useState("")
  console.log(author)

  const handleSubmit=(e)=>{
      e.preventDefault()

      console.log(optionOne , optionTwo)
      dispatch(handleAddQuestion({ author : author, optionOneText : optionOne, optionTwoText : optionTwo}))
      history.push('/')
      setOptionOne('')
      setOptionTwo("")
  }

    return (
        <div>
            <Container maxWidth="xs">
                <form  style={{display:"flex" , flexDirection:"column" }} onSubmit={handleSubmit}>
                <Typography variant="h5" color="initial">Would you rather ? </Typography>
              <h6 style={{marginTop:"2em"}}>  Add option One </h6> : 
            <TextField
              id=""
              label="option One"
              onChange={(e)=>{setOptionOne(e.target.value)}}
              
            />
               <h6 style={{marginTop:"2em"}}> Add option Two </h6> : 
                <TextField
              id=""
              label="option Two"
              onChange={(e)=>{setOptionTwo(e.target.value)}}
              
            />
            <button className="btn" type="submit"> submit quest </button>
            </form>
              
            </Container>
          
        </div>
    )
}

export default NewQuestion
