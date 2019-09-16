import * as React from "react";

class DropdownFilter extends React.Component<
  { filterName: string; optionList: Set<string> },
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

  public createDropdownItems() {
    let options: any = [];

    this.props.optionList.forEach(item => {
      options.push(
        <li>
          <option className="dropdown-item" onClick={this.handleChange}>
            {item}
          </option>
        </li>
      );
    });
    return options;
  }

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
            {this.createDropdownItems()}
          </ul>
        </div>
      </div>
    );
  }
}

export default DropdownFilter;
