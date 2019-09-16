import * as React from "react";
import moment from "moment";

import dot from "./../images/icons/dot.svg";
import star from "./../images/icons/star.svg";
import fork from "./../images/icons/fork.svg";

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
            <img src={star} className="" alt="" />
            <span>{props.item.stargazers_count}</span>
          </span>
        </a>
      ) : (
        <span />
      )}

      {props.item.forks ? (
        <a href={props.item.forks_url} className="pinned-item-meta muted-link">
          <span className="d-inline-block mr-3">
            <img src={fork} className="" alt="" />
            {props.item.forks}
          </span>
        </a>
      ) : (
        <span />
      )}
      <span>
        Updated on {moment(props.item.updated_at).format("MMM DD, YYYY")}
      </span>
    </p>
  );
};
