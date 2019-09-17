import * as React from "react";
import { DetailIconList } from "./../components/DetailIconList";

export const RepositoryItem = (props: any) => {
  return (
    <li className="col-12 d-flex width-full py-4 border-bottom public source">
      <div className="col-10 col-lg-9 d-inline-block">
        <div className="d-inline-block mb-1">
          <h3>
            <a href={props.item.html_url}>{props.item.name}</a>
          </h3>
        </div>
        <div>
          {props.item.fork ? (
            <span className="f6 text-gray mb-1">
              Forked from{" "}
              <a className="muted-link" href={props.item.html_url}>
                {props.item.full_name}
              </a>
            </span>
          ) : (
            <span></span>
          )}
        </div>

        <div>
          <p className="col-9 d-inline-block text-gray mb-2 pr-4">
            {props.item.description}
          </p>
        </div>

        <DetailIconList item={props.item} showLicense={true} showDate={true} />
      </div>
      {/*Star Button*/}
      <div className="col-2 col-lg-3 d-flex flex-column flex-justify-around">
        <div className="text-right">
          <div className="text-right hide-lg hide-md hide-sm hide-xs ">
            <button
              className="btn btn-sm  js-toggler-target"
              type="submit"
              value="Star"
              aria-label="Star this repository"
              title="Star octocat/linguist"
              data-ga-click="Repository, click star button, action:profiles#show; text:Star"
            >
              <svg
                className="octicon octicon-star mr-1"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                ></path>
              </svg>
              Star
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
