import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://09ab1462404349303580542e5e77f797@o4509321567141889.ingest.us.sentry.io/4509321568976896",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
