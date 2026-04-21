export const withBase = (path: string) => {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("#")) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
};
