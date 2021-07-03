import React, { createContext, useState } from "react";
import "./App.css";
// import APITest from "./components/APITest";
import image from "./assets/OWNit.png";
import profileData from "./components/data/profile";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import EditProfile from "./components/EditProfile";

export const ProfileContext = createContext();
console.log(ProfileContext);

function App() {
  const [profile, setProfile] = useState(profileData);

  const updateProfile = (updatedEntry) => {
    setProfile({...updatedEntry});
}

const value = { profile, updateProfile }

  return (
    <div className="App">
      {/* <APITest /> */}
      <div className="topBar">
        <Link to="/">
          <img src={image} alt="logo" className="logo" />
        </Link>
        <Login />
      </div>
      <nav>
        <Link to="/dashboard">
          <h1>Dashboard</h1>
        </Link>
        <Link to="/profile">
          <h1>Profile</h1>
        </Link>
        <Link to="/search">
          <h1>Search</h1>
        </Link>
      </nav>
      <ProfileContext.Provider value={value}>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/Search">
              <Search />
            </Route>
            <Route exact path="/Search">
              <EditProfile />
            </Route>
          </Switch>
        </main>
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
