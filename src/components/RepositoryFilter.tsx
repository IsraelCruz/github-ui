import * as React from "react";

class RepositoryFilter extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className="border-bottom border-gray-dark py-3">
        <form className="d-block d-sm-flex">
          {/* Search Bar */}
          <div className="mb-3 mb-sm-0 mr-sm-3 flex-auto">
            <input
              className="form-control width-full js-autosearch-field"
              placeholder="Find a repository…"
            ></input>
          </div>
          <div className="d-flex">
            {/* Dropdown Options */}
            <div className="details-reset details-overlay position-relative mr-2">
              <div className="btn" aria-haspopup="menu" role="button">
                <i>Type:</i>
                <span data-menu-button=""> All </span>
                <span className="dropdown-caret"></span>
              </div>
            </div>
            <div className="details-reset details-overlay position-relative mr-2">
              <div className="btn" aria-haspopup="menu" role="button">
                <i>Language:</i>
                <span data-menu-button=""> All </span>
                <span className="dropdown-caret"></span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RepositoryFilter;
