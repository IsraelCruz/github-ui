import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OverviewPage from "./../pages/OverviewPage";
import RepositoriesPage from "./../pages/RepositoriesPage";

class Navigation extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  public render() {
    return (
      <Router>
        <div className="UnderlineNav width-full user-profile-nav js-sticky top-0">
          <div className="UnderlineNav-body">
            <Link
              className="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 selected"
              to="/"
            >
              Overview
            </Link>
            <Link
              className="UnderlineNav-item mr-0 mr-md-1 mr-lg-3"
              to="/Repositories/"
            >
              Repositories
              <span className="Counter hide-lg hide-md hide-sm">55</span>
            </Link>
          </div>
        </div>

        <Route path="/" exact component={OverviewPage} />
        <Route path="/Repositories/" component={RepositoriesPage} />
      </Router>
    );
  }
}

export default Navigation;
