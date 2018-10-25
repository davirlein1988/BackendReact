import Raven from "raven-js";
function init() {
  Raven.config("https://a08a65a60b0140f1b8d11011ff1a50ee@sentry.io/1308738", {
    release: "1.0.0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
