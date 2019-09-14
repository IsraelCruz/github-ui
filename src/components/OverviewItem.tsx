import * as React from "react";
import dot from "./../images/icons/dot.svg";
import star from "./../images/icons/star.svg";
import fork from "./../images/icons/fork.svg";

export const OverviewItem = (props: any) => {
  console.log(props);
  return (
    <li className="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-content-stretch">
      <div className="Box pinned-item-list-item d-flex p-3 width-full public source">
        <div className="pinned-item-list-item-content">
          <div className="d-flex width-full flex-items-center position-relative">
            <a href={props.item.git_url} className="text-bold flex-auto">
              <span className="repo">{props.item.name}</span>
            </a>
          </div>
          <div className="pinned-item-desc text-gray text-small d-block mt-2 mb-3">
            {props.item.description}
          </div>

          <p className="mb-0 f6 text-gray">
            <img src={dot} className="" alt="" />
            {props.item.language}
            <img src={star} className="" alt="" />
            {props.item.stargazers_count}
            <img src={fork} className="" alt="" />
            {props.item.forks}
          </p>
        </div>
      </div>
    </li>
  );
};
