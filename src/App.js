import "./App.css";
import { useEffect } from "react";
import { handleInitialData } from "./store/shared";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Login from "./components/login";
import Container from "@mui/material/Container";
import { Switch, Route } from "react-router-dom";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";
import QuestionDetail from "./components/QuestionDetail";



import PageNotFound from "./components/PageNotFound";
import Dashboard from "./components/Dashboard";
import { CircularProgress } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.App.loading);

  const isLoggedin = useSelector((state) => state.App.loggedIn);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <div style={{ marginTop: "100px" }}>
          <Container maxWidth="xs">
            {loading ? 
              <CircularProgress />
             : 
             !isLoggedin ?
              <Switch>
             
            <Route path="/" component={Login} />
       
                
                </Switch>
                :
              
              <Switch>
              
                <Route path="/" exact component={Dashboard} />
                <Route path="/login"  component={Login} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/add" component={NewQuestion} />
                


                <Route path="/question/:qid" component={QuestionDetail} />

                <Route component={PageNotFound} />
              </Switch>
              
            }
              
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
