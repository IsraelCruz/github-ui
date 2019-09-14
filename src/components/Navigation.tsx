import * as React from "react";

class Navigation extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  public render() {
    return (
      <div className="UnderlineNav width-full user-profile-nav js-sticky top-0">
        <div className="UnderlineNav-body">
          <a className="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 selected">
            Overview
          </a>
          <a className="UnderlineNav-item mr-0 mr-md-1 mr-lg-3">
            Repositories
            <span className="Counter hide-lg hide-md hide-sm">55</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navigation;
