import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header.js'
import Block1 from './components/Block1/Block1.js'
import Block2 from './components/Block2/Block2.js'
import Block3 from './components/Block3/Block3.js'

import Block4 from './components/Block4/Block4.js'
import Footer from './components/Footer/Footer.js'
import Map from './components/Map/Map.js'

function App() {
  return (

    <>
      <Router>
        <Switch>
            <Route exact path="/">
              <Header />
              <Block1 />
              <Block2 />
              <Block3 />
              <Block4 />
              <Footer />
            </Route>
            <Route exact path="/Map">
              <Map />
            </Route>
        </Switch>
      </Router>
    </>

  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
