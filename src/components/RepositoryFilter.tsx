import * as React from "react";
import DetailMenu from "./../components/DetailMenu";

class RepositoryFilter extends React.Component<
  { filterData: any },
  { searchValue: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { searchValue: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    console.log(this.state.searchValue);
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(event: any) {
    event.preventDefault();
    this.props.filterData(this.state.searchValue);
  }

  public componentDidUpdate() {
    //this.props.filterData(this.state.searchValue);
  }

  public render() {
    return (
      <div className="border-bottom border-gray-dark py-3">
        <form className="d-block d-sm-flex" onSubmit={this.handleSubmit}>
          {/* Search Bar */}
          <div className="mb-3 mb-sm-0 mr-sm-3 flex-auto">
            <input
              className="form-control width-full js-autosearch-field"
              placeholder="Find a repository…"
              type="text"
              value={this.state.searchValue}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="d-flex">
            {/* Filters */}
            <div className="details-reset details-overlay position-relative mr-2">
              <DetailMenu filterName="Type" />
            </div>
            <div className="details-reset details-overlay position-relative mr-2">
              <DetailMenu filterName="Language" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RepositoryFilter;
