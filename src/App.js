import './App.css';
import APITest from "./components/APITest"
import image from './assets/OWNit.png'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Search from './components/Search'
import Login from './components/Login';

function App() {

  console.log(image)
  return (
    <div className="App">
      {/* <APITest /> */}
      <div className="topBar">
        <img src={image} alt="logo" className="logo"/>
        <Login />
      </div>
      <nav>
        <h1>Dashboard</h1>
        <h1>Profile</h1>
        <h1>Search</h1>
      </nav>
      <h1>Hello</h1>
    </div>
  );
}

export default App;