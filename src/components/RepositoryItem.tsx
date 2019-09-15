import * as React from "react";
import dot from "./../images/icons/dot.svg";
import star from "./../images/icons/star.svg";
import fork from "./../images/icons/fork.svg";

export const RepositoryItem = (props: any) => {
  return (
    <li className="col-12 d-flex width-full py-4 border-bottom public source">
      <div className="col-10 col-lg-9 d-inline-block">
        <div className="d-inline-block mb-1">
          <h3>
            <a href="/">{props.item.name}</a>
          </h3>
        </div>

        <div>
          <p className="col-9 d-inline-block text-gray mb-2 pr-4">
            {props.item.description}
          </p>
        </div>

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
            <span className="d-inline-block mr-3">
              <img src={star} className="" alt="" />
              {props.item.stargazers_count}
            </span>
          ) : (
            <span />
          )}

          {props.item.forks ? (
            <span className="d-inline-block mr-3">
              <img src={fork} className="" alt="" />
              {props.item.forks}
            </span>
          ) : (
            <span />
          )}

          <span>24 days ago</span>
        </p>
      </div>
    </li>
  );
};
