import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Fish from "./Fish";
import FishSingle from "./FishSingle";
import Home from "./Home";
import Header from "./Header";
import './index.css'
// import Login from "../pages/Login";

function App() {
  const [user, setUser] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const history = useHistory()

  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function deleteItem(id){
    fetch(`/fishes/${id}`, { 
      method: 'DELETE' ,
      headers: { 'Content-Type': 'application/json'},
    })
    .then(() => setDeleted(!deleted))
    .then(() => history.push('/fishes'))
  }


  useEffect(() => {
    fetch("/user")       // link for the authors DB
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Header/>
      <main>
        <Switch>
          <Route path="/new">
          </Route>
          <Route exact path="/">
            <Fish />
          </Route>
          <Route path="/FishSingle/:id">
            <FishSingle  deleteItem={deleteItem} />
          </Route>
          <Route path="/fishes/:id" method="DELETE">
            < Home/>
          </Route>
        </Switch>
      </main>
    </>
  );

}

export default App;
