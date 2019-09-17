import * as React from "react";
import { OverviewItem } from "./../components/OverviewItem";

class OverviewPage extends React.Component<
  { setRepoCount: any },
  { repoData: any[] }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      repoData: []
    };
  }

  public componentDidMount() {
    fetch("https://api.github.com/users/octocat/repos")
      .then(response => response.json())
      .then(data => {
        let sortedData = data.sort(function(a: any, b: any) {
          return b.stargazers_count - a.stargazers_count;
        });
        this.props.setRepoCount(sortedData.length);
        this.setState({ repoData: sortedData });
      });
  }

  public createRepoItems() {
    let repoItems: any = [];

    this.state.repoData.forEach(function(item) {
      repoItems.push(<OverviewItem item={item} />);
    });
    return repoItems;
  }

  public render() {
    return (
      <div className="position-relative">
        <div className="mt-4">
          <div className="js-pinned-items-reorder-container">
            <h2 className="f4 mb-2 text-normal">Popular repositories</h2>
            <ol className="d-flex flex-wrap list-style-none gutter-condensed mb-4">
              {this.createRepoItems()}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewPage;
