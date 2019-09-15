import React from "react";
import "@primer/css/index.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navigation from "./components/Navigation";

class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  public render() {
    return (
      <div className="container-xl clearfix px-3 mt-4">
        <header className="App-header"></header>
        <Navigation />
      </div>
    );
  }
}

export default App;
