import app from "../src/index.js";

export default async function handler(req: Request): Promise<Response> {
  return app.fetch(req);
}
