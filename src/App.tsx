import React, { Fragment } from "react";

import "./App.scss";

import { Dashboard } from "./modules/dashboard/dashboard";
// import { ErrorBoundary } from "./error-boundary";

function App() {
  return (
    <Fragment>
      {/* <ErrorBoundary> */}
      <h1> Coronavirus Status </h1>
      <Dashboard />
      {/* </ErrorBoundary> */}
    </Fragment>
  );
}

export default App;
