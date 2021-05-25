import React, { useState } from "react";
import fakeDataTwo from "../../../fakeDataTwo";
import RiflesListItems from "./RiflesListItems";

const RiflesList = () => {
  const [riflesItems, setRiflesItems] = useState(fakeDataTwo);
  return (
    <div>
      <div id="riflesListNav">
        <ul>
          <li>
            <h4>Rifles</h4>
          </li>
        </ul>
        <ul>
          <li>
            <button className="btn btn-success btn-sm">See all</button>
          </li>
        </ul>
      </div>
      <div className="riflesList">
        <div className="row">
          {riflesItems.map((rifles) => (
            <div className="col-md-3">
              <RiflesListItems rifles={rifles}></RiflesListItems>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiflesList;
