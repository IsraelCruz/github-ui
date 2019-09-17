import * as React from "react";

class SearchBar extends React.Component<
  { search: any },
  { searchValue: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { searchValue: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ searchValue: event.target.value });
    this.props.search(event.target.value);
  }

  handleSubmit(event: any) {
    event.preventDefault();
    this.props.search(this.state.searchValue);
  }

  public componentDidUpdate() {
    //this.props.search(this.state.searchValue);
  }

  public render() {
    return (
      <div className="">
        <form className="" onSubmit={this.handleSubmit}>
          {/* Search Bar */}
          <div className="mb-3 mb-sm-0 flex-auto">
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
