import React, { useEffect, useState, createContext} from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Fish from "./Fish";
import FishSingle from "./FishSingle";
import Home from "./Home";
import Header from "./Header";
import './index.css'
import Edit from "./Edit";
// import Sidebar from "./Sidebar";

export const UserContext = createContext()

// import Context from './Context'
// import Login from "../pages/Login";

function App() {
  const [user, setUser] = useState(null);
  const [deleted, setDeleted] = useState(false);
  // const [fishData, setFishData] = useState(null);
  // const {mode, toggleMode} =useContext(ThemeContext);
  // const { isDarkMode } = useContext(ThemeContext);
  // const theme = isDarkMode ? darkTheme : lightTheme;

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

  function updateFish(updatedFish) {
    const updatedCars = fishData.map(ogFish => {
        if (ogFish.id === updatedFish.id)
            return updatedFish
        else
            return ogFish;
    })
    setFishData(updatedFish)
  
  }
  const [fishData, setFishData] = useState([]);
  useEffect(() => {
      fetch("/fishes")
      .then(res => res.json())
      .then((data) => setFishData(data))
    },[]);

  useEffect(() => {
    fetch("/user")       // link for the authors DB
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    // <ThemeProvider>
    //   <GlobalStyle/>
    // <ThemeProvider>

    <div>
     <UserContext.Provider value = {[fishData]}>
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

          <Route path="/Fishes/:id" method="DELETE">
            < Home/>
          </Route>

          <Route path="/edit/:id/">
            <Edit updateFish={updateFish} />
          </Route>
        </Switch>
      </main>
    </UserContext.Provider>
    </div>
    //  
  );

}

export default App;
