import React, { useState } from "react";
import { Route } from "react-router-dom";

export default function MatchTester() {
  const initialState = {
    path: "",
    exact: false,
    strict: false,
    sensitive: false,
  };
  const [target, setTarget] = useState(initialState);

  const handleType = (e) => {
    const { name, type, checked, value } = e.target;

    const v = type === "checkbox" ? checked : value;

    setTarget({
      ...target,
      [name]: v,
    });
  };

  const { path, exact, strict, sensitive } = target;

  return (
    <Route
      path={path}
      strict={strict}
      exact={exact}
      sensitive={sensitive}
      children={({ match }) => (
        <div>
          <pre className="route flexbox">
            <code className="stretch">
              {"<Route"}
              <label>
                {'  path="'}
                <input
                  type="text"
                  name="path"
                  value={path}
                  title="A path should begin with a forward slash (/)"
                  onChange={handleType}
                />
                {'"'}
              </label>
              <label>
                {"  exact={"}
                {exact.toString()}
                <input
                  className={!!exact && "space"}
                  type="checkbox"
                  name="exact"
                  value={exact}
                  onChange={handleType}
                />
                {"}"}
              </label>
              <label>
                {"  strict={"}
                {strict.toString()}
                <input
                  className={!!strict && "space"}
                  type="checkbox"
                  name="strict"
                  value={strict}
                  onChange={handleType}
                />
                {"}"}
              </label>
              <label>
                {"  sensitive={"}
                {sensitive.toString()}
                <input
                  className={!!sensitive && "space"}
                  type="checkbox"
                  name="sensitive"
                  value={sensitive}
                  onChange={handleType}
                />
                {"}"}
              </label>
              {"/>"}
            </code>
          </pre>

          <h3
            style={{
              color: match ? "green" : "red",
            }}
          >
            {match ? "Mached" : "Unmach"}
          </h3>

          {match && (
            <pre
              style={{
                color: match ? "green" : "red",
              }}
            >
              <code>
                {JSON.stringify(match, null, 2).replace(/\\\\/g, "\\")}
              </code>
            </pre>
          )}
        </div>
      )}
    />
  );
}
