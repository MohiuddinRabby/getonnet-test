import React, { useState } from "react";
import fakeData from "../../../fakeData";
import AllWeapon from "./AllWeapon";

const FindweaponForm = () => {
  const [weaponList, setWeaponList] = useState(fakeData);
  let search = weaponList;
  // search country state
  const [itemToSearch, setItemToSearch] = useState("");
  const searchItems = (item) => {
    item.preventDefault();
    setItemToSearch(item.target.value);
  };
  if (itemToSearch.length > 0) {
    search = search.filter((i) => {
      return i.name.toLowerCase().includes(itemToSearch.toLowerCase());
    });
  }
  // search result items
  const [searchResults, setSearchResults] = useState([]);
  //
  const result = (countries) => {
    setSearchResults([...searchResults, countries]);
  };

  return (
    <div>
      <div className="col-md-4 mx-auto px-2">
        <div className="justify-content-center mt-5">
          <div className="input-group mb-2 mr-sm-2">
            <input
              type="text"
              className="form-control"
              onChange={searchItems}
              value={itemToSearch}
              placeholder="Find your weapon here"
            />
          </div>
        </div>
      </div>
      {/* all weapon */}
      <div className="container">
        <div className="row">
          {search.map((allWeapon) => (
            <div className="col-md-3 py-3" key={allWeapon.id}>
              <AllWeapon allWeapon={allWeapon} result={result}></AllWeapon>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindweaponForm;
