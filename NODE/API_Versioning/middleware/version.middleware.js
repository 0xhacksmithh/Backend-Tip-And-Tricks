export default function versionMiddleware(req, res, next) {
  const headerVersion = req.headers["accept-version"];

  if (headerVersion) {
    req.apiVersion = headerVersion;
  } else {
    req.apiVersion = "v1";
  }

  next();
}
