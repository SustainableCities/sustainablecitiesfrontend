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

import Block4 from './components/Block4/Block4.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
  //   <Router>
  //   <div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li>
  //           <Link to="/users">Users</Link>
  //         </li>
  //       </ul>
  //     </nav>

  //     {/* A <Switch> looks through its children <Route>s and
  //         renders the first one that matches the current URL. */}
  //     <Switch>
  //       <Route path="/about">
  //         <About />
  //       </Route>
  //       <Route path="/users">
  //         <Users />
  //       </Route>
  //       <Route path="/">
  //         <Home />
  //       </Route>
  //     </Switch>
  //   </div>
  // </Router>
    <>
      <Header />
      <Block1 />
      <Block2 />

      <Block4 />
      <Footer />
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

  