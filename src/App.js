import "./App.css";
// import APITest from "./components/APITest";
import image from "./assets/OWNit.png";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  console.log(image);
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
