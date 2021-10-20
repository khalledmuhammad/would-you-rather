import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { AppActions } from "../store/App";
import { Button } from "@material-ui/core";
import {  useHistory } from 'react-router-dom'
import Alert from '@mui/material/Alert';



const friendOptions = [
  {
    key: "Sarah Edo",
    text: "Sarah Edo",
    value: "sarahedo",
    image: {
      avatar: true,
      src: "https://semantic-ui.com/images/avatar/large/helen.jpg",
    },
  },
  {
    key: "Tyler McGinnis",
    text: "Tyler McGinnis",
    value: "tylermcginnis",
    image: {
      avatar: true,
      src: " https://semantic-ui.com/images/avatar/large/matt.jpg",
    },
  },
  {
    key: "John Doe",
    text: "John Doe",
    value: "johndoe",
    image: {
      avatar: true,
      src: "https://semantic-ui.com/images/avatar2/large/matthew.png",
    },
  },
];
function Login() {
  const [select, setSelect] = useState();
  const dispatch = useDispatch();
  const getselectedUser = (e, data) => {
    setSelect(data.value);
    dispatch(AppActions.setAuthedUser(data.value));
    SetAlert(false)

  };
  const history = useHistory()
  const [Alerts , SetAlert] = useState(false)

  const handleLogin = () => {
    if(select){
      SetAlert(false)

      dispatch(AppActions.setLoggedin())
    history.push("/")
    } else{
      SetAlert(true)
      
    }
    


  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Dropdown
        placeholder="Select Friend"
        fluid
        selection
        options={friendOptions}
        onChange={getselectedUser}
      />
      <Button
        variant="contained"
        onClick={handleLogin}
        style={{ marginTop: "10px" , marginBottom:"10px", width: "20%" }}
        color="primary"

      >
        login
      </Button>
      
      
      {
        Alerts &&       <Alert severity="warning">This is a warning alert —please Select a user!</Alert>

      }
      
    </div>
  );
}

export default Login;
