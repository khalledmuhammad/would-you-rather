import React, { useState } from "react";
import { useSelector } from "react-redux";
/* import { Link } from "react-router-dom"; */
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AnsweredQs from "./AnsweredQs";
import Unansweredqs from "./Unansweredqs";

function Dashboard() {
  const authedUser = useSelector((state) => state.App.authedUser);
  const users = useSelector((state) => state.Users.user);
  const currentUser =
    Object.values(users).find((user) => user.id === authedUser) || " ";
  console.log(currentUser);
  const [key, setKey] = useState("home");

  return (
    <div>
      <h1>welcome , {currentUser.name}</h1>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="profile" title="answered Questions">
          <AnsweredQs avatar={currentUser.avatarURL} user={currentUser.name}  />
        </Tab>
        <Tab eventKey="home" title="unanswered Questions">
          <Unansweredqs />
        </Tab>
       
      </Tabs>
    </div>
  );
}

export default Dashboard;
