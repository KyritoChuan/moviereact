import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

// Pages
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Movie from "./pages/movie";
import Error from "./pages/error404";

function App() {
  return (
    <>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <Router>
          <header style={{ zIndex: 1 }}>
            <MenuTop />
          </header>
          <main>
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/new-movies" component={NewMovies} exact={true} />
              <Route path="/popular" component={Popular} exact={true} />
              <Route path="/search" component={Search} exact={true} />
              <Route path="/movie/:id" component={Movie} exact={true} />
              <Route path="*" component={Error} />
            </Switch>
          </main>
        </Router>
      </section>
    </>
  );
}

export default App;
