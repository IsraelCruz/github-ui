import * as React from "react";

class DetailMenu extends React.Component<
  { filterName: string },
  { value: string; toggle: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { value: "All", toggle: false };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    console.log(event.target.value);
    this.toggleDropdown();
    this.setState({ value: event.target.value });
  }

  toggleDropdown = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  public render() {
    return (
      <div>
        <div className="dropdown details-reset details-overlay d-inline-block">
          <summary
            className="btn"
            aria-haspopup="true"
            onClick={this.toggleDropdown}
          >
            <i>{this.props.filterName}:</i>
            <span data-menu-button=""> {this.state.value} </span>
            <span className="dropdown-caret"></span>
          </summary>

          <ul
            className={
              this.state.toggle ? "dropdown-menu dropdown-menu-se" : "d-none"
            }
          >
            <li>
              <option className="dropdown-item" onClick={this.handleChange}>
                Dropdown 1
              </option>
            </li>
            <li>
              <option className="dropdown-item" onClick={this.handleChange}>
                Dropdown 2
              </option>
            </li>
            <li>
              <option className="dropdown-item" onClick={this.handleChange}>
                Dropdown 3
              </option>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DetailMenu;
