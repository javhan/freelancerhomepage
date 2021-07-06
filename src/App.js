import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import image from "./assets/OWNit.png";
import profileData from "./components/data/profile";
import reviewData from "./components/data/review";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";

export const ProfileContext = createContext();
export const ScheduleContext = createContext();
export const ReviewContext = createContext();
const ATKey = process.env.REACT_APP_ATKEY;

function App() {
  const [profile, setProfile] = useState(profileData);
  const [review, setReview] = useState(reviewData);
  const [event, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/appzWGZzAJmMUTHkg/Table%201?api_key=${ATKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.records);
        setEvents(res.records);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateProfile = (updatedEntry) => {
    setProfile({ ...updatedEntry });
  };
  const updateEvents = (updatedEntry) => {
    console.log("hi");
  };
  const updateReview = (updatedEntry) => {
    console.log("hi");
  };

  const value = { profile, updateProfile };
  const schedule = { event, updateEvents };
  const reviews = { review, updateReview };

  return (
    <div className="App">
      {/* <APITest /> */}
      <div className="topBar">
        <Link to="/">
          <img src={image} alt="logo" className="logo" />
        </Link>
        {/* <Login /> */}
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
            <ScheduleContext.Provider value={schedule}>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <ReviewContext.Provider value={reviews}>
                <Route exact path="/profile">
                  <Profile />
                </Route>
              </ReviewContext.Provider>
            </ScheduleContext.Provider>
          </Switch>
        </main>
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
