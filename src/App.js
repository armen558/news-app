import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Sources from "./pages/Sources/Sources";
import { fetchSources } from './Helpers';

import "./App.css";

class App extends React.Component {
  state = {
    sources: [],
  };

  componentDidMount = () => {
    fetchSources().then(data => this.setState({sources: data.sources.slice(0,4)}))
  }

  render() {
    return (
      <div>
        <Header sources={this.state.sources} />
        <div className="main">
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/sources">
              <Sources sources={this.state.sources} />
            </Route>
            <Route exact path="/sources/:id" component={Sources} />
            <Route exact path="/search/:query" component={Sources}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
