import "./App.css";
import { useEffect } from "react";
import { handleInitialData } from "./store/shared";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Login from "./components/login";
import Container from "@mui/material/Container";
import { Switch, Route , Redirect } from "react-router-dom";
import LeaderBoard from "./components/LeaderBoard";
import QuestionList from "./components/QuestionList";
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
            {loading ? (
              <CircularProgress />
            ) : (
              
              <Switch>
              
                <Route path="/" exact component={Dashboard} />
                <Route path="/login"  component={Login} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/questions" component={QuestionList} />
                <Route path="/addquestion" component={NewQuestion} />
                


                <Route path="/question-detail/:qid" component={QuestionDetail} />

                <Route component={PageNotFound} />
              </Switch>
              
            )}
              { 
                  !isLoggedin &&
                  <Route path="/">
                    <Redirect to="/login" />
                    
                    </Route>  
                    
                 }

          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
