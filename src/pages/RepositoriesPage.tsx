import * as React from "react";
import { RepositoryItem } from "./../components/RepositoryItem";
import DropdownFilter from "./../components/DropdownFilter";
import SearchBar from "./../components/SearchBar";
import moment from "moment";

const types: string[] = ["All", "Sources", "Forks", "Archived", "Mirrors"];
const typeFilters: Set<string> = new Set(types);
const typeMap: any = {
  Sources: "fork",
  Forks: "fork",
  Archived: "archived",
  Mirrors: "mirror_url",
  Language: "language"
};

class RepositoriesPage extends React.Component<
  {},
  { repoData: any[]; currentData: any[] }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      repoData: [],
      currentData: []
    };

    this.search = this.search.bind(this);
    this.filter = this.filter.bind(this);
  }

  public createItems() {
    let items: any = [];

    this.state.currentData.forEach(function(item) {
      items.push(<RepositoryItem item={item} />);
    });
    return items;
  }

  public createLanguageList(data: any[]) {
    let languageList: Set<string> = new Set();
    languageList.add("All");

    data.forEach(function(item) {
      if (item.language) {
        languageList.add(item.language);
      }
    });
    return languageList;
  }

  public search(searchValue: string) {
    let searchResults = this.state.repoData.filter(function(item) {
      return item.name.toLowerCase().startsWith(searchValue.toLowerCase());
    });
    this.setState({ currentData: searchResults });
  }

  public filter(filterValue: string, filterType: string) {
    //special cases
    if (filterValue == "All") {
      return this.setState({ currentData: this.state.repoData });
    }

    let filteredData = this.state.repoData.filter(function(item) {
      let type = typeMap[filterType];
      return item[type] == filterValue;
    });
    return this.setState({ currentData: filteredData });
  }

  public componentDidMount() {
    fetch("https://api.github.com/users/octocat/repos")
      .then(response => response.json())
      .then(data => {
        let sortedData = data.sort(function(a: any, b: any) {
          return (
            moment(b.updated_at).valueOf() - moment(a.updated_at).valueOf()
          );
        });
        this.setState({ repoData: sortedData, currentData: sortedData });
      });
  }

  public render() {
    let repositoryItems: any = [];
    let languageList: Set<string> = new Set();
    languageList.add("All");

    this.state.currentData.forEach(function(item) {
      if (item.language) {
        languageList.add(item.language);
      }
      repositoryItems.push(<RepositoryItem item={item} />);
    });

    return (
      <div className="position-relative">
        <div className="border-bottom border-gray-dark py-3">
          <div className="d-block d-sm-flex">
            <div className="mb-3 mb-sm-0 mr-sm-3 flex-auto">
              <SearchBar search={this.search} />
            </div>
            <div className="d-flex">
              {/* Filters */}
              <div className="details-reset details-overlay position-relative mr-2">
                <DropdownFilter
                  filterName="Type"
                  optionList={typeFilters}
                  filterData={this.filter}
                />
              </div>
              <div className="details-reset details-overlay position-relative mr-2">
                <DropdownFilter
                  filterName="Language"
                  optionList={this.createLanguageList(this.state.repoData)}
                  filterData={this.filter}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>

        <ul>{this.createItems()}</ul>
      </div>
    );
  }
}

export default RepositoriesPage;
