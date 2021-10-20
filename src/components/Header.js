import React from "react";
import {  NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { AppActions } from "../store/App";

const Header = () => {
  const loggedInuser = useSelector((state) => state.App.authedUser);
  const isLoggedin = useSelector((state) => state.App.loggedIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(AppActions.setLogOut());
  };

  return (
    <AppBar style={{ background: "#9D84B7" }} position="fixed">
      <Toolbar  style={{ display: "flex" , justifyContent:"space-between"}}>
        <Typography style={{ fontSize:"1.5vw" ,  color: "white" }}  variant="h6">
          Would you Rather ?
        </Typography>
        {isLoggedin && (
          <div style={{ display:"flex"  , alignItems:"center" , justifyContent:"center" , fontSize: "2vw"  }}>
            <NavLink activeClassName="active" className="link" exact to="/"> home </NavLink>
            <NavLink  activeClassName="active" className="link" to="/leaderboard"> leaderboard </NavLink>
            <NavLink activeClassName="active" className="link" to="/addquestion"> NewQuestion </NavLink>
          </div>
        )}

        {isLoggedin && (
          <div style={{ display: "flex", alignItems: "center" , justifyContent:"center" }}>
            <Typography  style={{  fontSize:"1.3vw",color: "white" }} variant="h6">
              welcome , {loggedInuser}
            </Typography>
            <Button
             
              variant="outlined"
              onClick={handleLogout}
            >
              logOut
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
