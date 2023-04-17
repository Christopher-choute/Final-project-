import React, { useEffect, useState, createContext} from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Fish from "./Fish";
import FishSingle from "./FishSingle";
import Search from "./Search";
// import Home from "./Home";
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
  const [search, setSearch] = useState("");
  // const [sort, setSort] = useState(false);
  // const [fishes, setFishes] = useState([]);
  // const [fishData, setFishData] = useState(null);


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
    const newFish = fishData.map(ogFish => {
        if (ogFish.id === updatedFish.id)
            return updatedFish
        else
            return ogFish;
    })
    setFishData(newFish)

  }
  const [fishData, setFishData] = useState([]);
  useEffect(() => {
      fetch("/fishes")
      .then(res => res.json())
      .then((data) => setFishData(data))
    },[]); 
    
    // const filteredFish = fishData.filter(fish => fish.name.toLowerCase().includes(search.toLowerCase()));
    const fishToRender = fishData.filter(fish => {
      if (search ===""){
        return true;
      }
      return (fish.species.toLowerCase().includes(search.toLowerCase()))
    })
    
  

  useEffect(() => {
    fetch("/user")       // link for the authors DB
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  function handleChange(e){
    setSearch(e.target.value)
  }
  console.log(fishToRender)

  if (!user) return <Login onLogin={setUser} />;

  // if(sort)
  //       fetchFish = bubbleSort(fetchFish);

  return (
    // <ThemeProvider>
    //   <GlobalStyle/>
    // <ThemeProvider>

    <div>
     <UserContext.Provider value = {[fishData]}>
      <NavBar user={user} setUser={setUser} />
      <Header handleChange={handleChange} search = {search} setSearch={setSearch}/>
      <main>
        <Switch>
          <Route path="/new">
          </Route>

          <Route exact path="/">
            <Fish fishToRender = {fishToRender} />
          </Route>

          {/* <div className="search-container">
              <input className="search-input" type="text" placeholder="Search for Make, Model or Year"  value={search} onChange= {(e) => setSearch(e.target.value)}  />
          </div> */}

          <Route path="/FishSingle/:id">
            <FishSingle  deleteItem={deleteItem} />
          </Route>

          <Route path="/Fishes/:id" method="DELETE">
            {/* < Home/> */}
          </Route>

          <Route path="/edit/:id/">
            <Edit updateFish={updateFish} />
          </Route>

          
          
          {/* <Header /> */}
        </Switch>
      </main>
    </UserContext.Provider>
    </div>
    //  
  );

}

export default App;
