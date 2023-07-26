import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route,NavLink,Switch } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


function NavBar() {
  return (
    <div>
      <NavLink to ="/"exact style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >Home</NavLink>

      <NavLink to="/about" exact style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >About</NavLink>

      <NavLink to="/login"exact style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >Login</NavLink>

      <NavLink to="/signup"exact style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >Signup</NavLink>

      <NavLink to="/message"exact style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >Message</NavLink>
    </div>
  );
}
function Signup(){
  return <h1>Get ready</h1>;
}
function Message(){
return <h1>You are all wlecome</h1>
}


function Home() {
  return <h1>Home!</h1>;
}

function About() {
  return <h1>This is my about component!</h1>;
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
/*function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
*/
ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/message">
        <Message/>
      </Route>
 
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);




