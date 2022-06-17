const Honeybadger = require("@honeybadger-io/js");

Honeybadger.configure({
  apiKey: "hbp_dU4VFZzG1tpmjxNGARqy1NoBDnLOV80JHUtm",
});

try {
  Honeybadger.setContext({
    tags: {
      severity: "info",
    },
  });

  throw "Error from Honeybadger";
} catch (e) {
  Honeybadger.notify(e);
}
