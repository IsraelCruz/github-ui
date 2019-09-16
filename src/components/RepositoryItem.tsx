import * as React from "react";
import { DetailIconList } from "./../components/DetailIconList";

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

        <DetailIconList item={props.item} />
        
      </div>
    </li>
  );
};
