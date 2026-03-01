// Base path for static assets — matches next.config.ts basePath
const BASE_PATH = process.env.NODE_ENV === "production" ? "/diamond9-athletics" : "";

export function img(path: string): string {
  return `${BASE_PATH}${path}`;
}
