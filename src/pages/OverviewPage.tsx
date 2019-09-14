import * as React from "react";
import { OverviewItem } from "./../components/OverviewItem";

const mockData = [
  {
    id: 132935648,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
    name: "boysenberry-repo-1",
    full_name: "octocat/boysenberry-repo-1",
    private: false,
    owner: {
      login: "octocat",
      id: 583231,
      node_id: "MDQ6VXNlcjU4MzIzMQ==",
      avatar_url: "https://avatars3.githubusercontent.com/u/583231?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url:
        "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/octocat/boysenberry-repo-1",
    description: "Testing",
    fork: true,
    url: "https://api.github.com/repos/octocat/boysenberry-repo-1",
    forks_url: "https://api.github.com/repos/octocat/boysenberry-repo-1/forks",
    keys_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/octocat/boysenberry-repo-1/teams",
    hooks_url: "https://api.github.com/repos/octocat/boysenberry-repo-1/hooks",
    issue_events_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/events",
    assignees_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/branches{/branch}",
    tags_url: "https://api.github.com/repos/octocat/boysenberry-repo-1/tags",
    blobs_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/languages",
    stargazers_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/stargazers",
    contributors_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/contributors",
    subscribers_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/subscribers",
    subscription_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/subscription",
    commits_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/merges",
    archive_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/downloads",
    issues_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/octocat/boysenberry-repo-1/deployments",
    created_at: "2018-05-10T17:51:29Z",
    updated_at: "2019-09-12T16:21:29Z",
    pushed_at: "2018-05-10T17:52:17Z",
    git_url: "git://github.com/octocat/boysenberry-repo-1.git",
    ssh_url: "git@github.com:octocat/boysenberry-repo-1.git",
    clone_url: "https://github.com/octocat/boysenberry-repo-1.git",
    svn_url: "https://github.com/octocat/boysenberry-repo-1",
    homepage: "",
    size: 4,
    stargazers_count: 2,
    watchers_count: 2,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 4,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 4,
    open_issues: 0,
    watchers: 2,
    default_branch: "master"
  },
  {
    id: 1300192,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzAwMTky",
    name: "Spoon-Knife",
    full_name: "octocat/Spoon-Knife",
    private: false,
    owner: {
      login: "octocat",
      id: 583231,
      node_id: "MDQ6VXNlcjU4MzIzMQ==",
      avatar_url: "https://avatars3.githubusercontent.com/u/583231?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url:
        "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/octocat/Spoon-Knife",
    description: "This repo is for demonstration purposes only.",
    fork: false,
    url: "https://api.github.com/repos/octocat/Spoon-Knife",
    forks_url: "https://api.github.com/repos/octocat/Spoon-Knife/forks",
    keys_url: "https://api.github.com/repos/octocat/Spoon-Knife/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/octocat/Spoon-Knife/teams",
    hooks_url: "https://api.github.com/repos/octocat/Spoon-Knife/hooks",
    issue_events_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/issues/events{/number}",
    events_url: "https://api.github.com/repos/octocat/Spoon-Knife/events",
    assignees_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/branches{/branch}",
    tags_url: "https://api.github.com/repos/octocat/Spoon-Knife/tags",
    blobs_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/statuses/{sha}",
    languages_url: "https://api.github.com/repos/octocat/Spoon-Knife/languages",
    stargazers_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/stargazers",
    contributors_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/contributors",
    subscribers_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/subscribers",
    subscription_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/subscription",
    commits_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/octocat/Spoon-Knife/merges",
    archive_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/octocat/Spoon-Knife/downloads",
    issues_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/labels{/name}",
    releases_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/octocat/Spoon-Knife/deployments",
    created_at: "2011-01-27T19:30:43Z",
    updated_at: "2019-09-14T17:21:07Z",
    pushed_at: "2019-09-14T03:55:59Z",
    git_url: "git://github.com/octocat/Spoon-Knife.git",
    ssh_url: "git@github.com:octocat/Spoon-Knife.git",
    clone_url: "https://github.com/octocat/Spoon-Knife.git",
    svn_url: "https://github.com/octocat/Spoon-Knife",
    homepage: "",
    size: 1407736,
    stargazers_count: 10158,
    watchers_count: 10158,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 105643,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 13911,
    license: null,
    forks: 105643,
    open_issues: 13911,
    watchers: 10158,
    default_branch: "master"
  }
];

class OverviewPage extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    let repoItems: any = [];

    mockData.forEach(function(item) {
      repoItems.push(<OverviewItem item={item} />);
    });

    return (
      <div className="position-relative">
        <div className="mt-4">
          <div className="js-pinned-items-reorder-container">
            <h2 className="f4 mb-2 text-normal">Popular repositories</h2>
            <ol className="d-flex flex-wrap list-style-none gutter-condensed mb-4">
              {repoItems}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewPage;
