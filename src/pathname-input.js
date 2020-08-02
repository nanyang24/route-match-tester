import React from "react";
import { Route } from "react-router-dom";

export default function PathnameInput() {
  return (
    <Route
      render={({ location, history }) => (
        <div id="pathname">
          <h3>Pathname:</h3>
          <div>
            <input
            className='pathname-input'
              type="text"
              placeholder="Pathname"
              value={location.pathname}
              style={{ width: "100%" }}
              onChange={(e) => {
                history.replace(e.target.value);
              }}
            />
          </div>
        </div>
      )}
    />
  );
}
