import { serve } from "@hono/node-server";
import snapscored from "../api/snapscored.js";
import snapunks from "../api/snapunks.js";
import { Hono } from "hono";

const app = new Hono();
app.route("/snapscored", snapscored);
app.route("/snapunks", snapunks);

const port = Number(process.env.PORT) || 3003;
serve({ fetch: app.fetch, port });
console.log(`Snap running at http://localhost:${port}`);
