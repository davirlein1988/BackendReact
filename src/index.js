import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Raven from "raven-js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
Raven.config("https://a08a65a60b0140f1b8d11011ff1a50ee@sentry.io/1308738", {
  release: "1.0.0",
  environment: "development-test"
}).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
