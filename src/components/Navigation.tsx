import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  RouteComponentProps
} from "react-router-dom";
import OverviewPage from "./../pages/OverviewPage";
import RepositoriesPage from "./../pages/RepositoriesPage";

class Navigation extends React.Component<{}, { repoCount: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      repoCount: 0
    };
    this.setRepoCount = this.setRepoCount.bind(this);
  }

  public setRepoCount(repoCount: number) {
    if (this.state.repoCount == 0) {
      this.setState({ repoCount });
    }
  }

  public render() {
    return (
      <Router>
        <div className="UnderlineNav width-full user-profile-nav js-sticky top-0">
          <div className="UnderlineNav-body">
            <NavLink
              exact
              activeClassName="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 selected"
              className="UnderlineNav-item mr-0 mr-md-1 mr-lg-3"
              to="/"
            >
              Overview
            </NavLink>
            <NavLink
              exact
              activeClassName="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 selected"
              className="UnderlineNav-item mr-0 mr-md-1 mr-lg-3"
              to="/Repositories/"
            >
              Repositories
              <span className="Counter hide-lg hide-md hide-sm ml-1">
                {this.state.repoCount || ""}
              </span>
            </NavLink>
          </div>
        </div>

        <Route
          path="/"
          exact
          component={(props: any) => (
            <OverviewPage setRepoCount={this.setRepoCount} />
          )}
        />
        <Route path="/Repositories/" component={RepositoriesPage} />
      </Router>
    );
  }
}

export default Navigation;
