import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import image from "./assets/OWNit.png";
import profileData from "./components/data/profile";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import firebase from "./components/data/firebase";

export const ProfileContext = createContext();
export const ScheduleContext = createContext();
export const TestContext = createContext();

function App() {
  const [profile, setProfile] = useState(profileData);
  const [test, setTest] = useState([]);

  const ref = firebase.firestore().collection("events");


  const getEvents = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTest(items);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  const updateProfile = (updatedEntry) => {
    setProfile({ ...updatedEntry });
  };

  const value = { profile, updateProfile };
  const testing = { test, setTest };

  return (
    <div className="App">
      <div className="topBar">
        <Link to="/">
          <img src={image} alt="logo" className="logo" />
        </Link>
      </div>
      <nav>
        <Link to="/dashboard">
          <h1>Dashboard</h1>
        </Link>
        <Link to="/profile">
          <h1>Profile</h1>
        </Link>
      </nav>
      <ProfileContext.Provider value={value}>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
              <TestContext.Provider value={testing}>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>

                <Route exact path="/profile">
                  <Profile />
                </Route>
              </TestContext.Provider>
          </Switch>
        </main>
      </ProfileContext.Provider>
      <div id="footer">SEI-30 Project 2</div>
    </div>
  );
}

export default App;
