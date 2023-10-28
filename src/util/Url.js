function normalize(url) {
  return "/" + url.split("/").filter(Boolean).join("/");
}

export function normalizeToBasePath(url) {
  if (import.meta.env.BASE_URL) {
    return normalize(import.meta.env.BASE_URL + url);
  }
}
