import React from "react";
import "@primer/css/index.scss";

import Navigation from "./components/Navigation";
import OverviewPage from "./pages/OverviewPage";

const App: React.FC = () => {
  return (
    <div className="container-xl clearfix px-3 mt-4">
      <div className="col-lg-9 col-md-8 col-12 float-md-left pl-md-2">
        <header className="App-header"></header>
        <Navigation />
        <OverviewPage />
      </div>
    </div>
  );
};

export default App;
