import React, { useState } from "react";
import fakeDataTwo from "../../../fakeDataTwo";
import RiflesListItems from "./RiflesListItems";

const RiflesList = () => {
  // eslint-disable-next-line no-unused-vars
  const [riflesItems, setRiflesItems] = useState(fakeDataTwo);
  return (
    <div className="container">
      <div id="riflesListNav">
        <ul>
          <li>
            <h4>Rifles</h4>
          </li>
        </ul>
        <ul>
          <li>
            <button className="btn button-main btn-sm">See all</button>
          </li>
        </ul>
      </div>
      <div className="riflesList">
        <div className="row">
          {riflesItems.map((rifles) => (
            <div className="col-md-3" key={rifles.id}>
              <RiflesListItems
                rifles={rifles}
              ></RiflesListItems>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiflesList;
