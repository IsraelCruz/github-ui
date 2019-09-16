import * as React from "react";

class SearchBar extends React.Component<
  { filterData: any; },
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
      <div className="">
        <form className="" onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    );
  }
}

export default SearchBar;
