import * as React from "react";
import moment from "moment";

import dot from "./../images/icons/dot.svg";
// import star from "./../images/icons/star.svg";
// import fork from "./../images/icons/fork.svg";
// import law from "./../images/icons/law.svg";

export const DetailIconList = (props: any) => {
  return (
    <p className="mb-0 f6 text-gray">
      {props.item.language ? (
        <span className="d-inline-block mr-3">
          <img src={dot} className="" alt="" />
          {props.item.language}
        </span>
      ) : (
        <span />
      )}

      {props.item.stargazers_count ? (
        <a
          href={props.item.stargazers_url}
          className="pinned-item-meta muted-link"
        >
          <span className="d-inline-block mr-3">
            <svg
              aria-label="star"
              className="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              ></path>
            </svg>

            <span>{props.item.stargazers_count}</span>
          </span>
        </a>
      ) : (
        <span />
      )}

      {props.item.forks ? (
        <a href={props.item.forks_url} className="pinned-item-meta muted-link">
          <span className="d-inline-block mr-3">
            <svg
              aria-label="fork"
              className="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              ></path>
            </svg>
            {props.item.forks}
          </span>
        </a>
      ) : (
        <span />
      )}

      {props.item.license && props.showLicense ? (
        <a href={props.item.forks_url} className="pinned-item-meta muted-link">
          <span className="d-inline-block mr-3">
            <svg
              className="octicon octicon-law mr-1"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"
              ></path>
            </svg>
            {props.item.license.name}
          </span>
        </a>
      ) : (
        <span />
      )}

      {props.showDate ? (
        <span>
          Updated on {moment(props.item.updated_at).format("MMM DD, YYYY")}
        </span>
      ) : (
        <span />
      )}
    </p>
  );
};
