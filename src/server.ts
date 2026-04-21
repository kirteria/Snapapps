import { serve } from "@hono/node-server";
import { Hono } from "hono";

// Import the raw Hono apps (not the fetch-bound exports)
import snapscored from "../api/snapscored.js";
import snapunks from "../api/snapunks.js";

const app = new Hono();

// For local dev, serve home page too
app.get("/", (c) => c.html(`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>SnapApps</title></head><body style="background:#0a0a0a;color:#fff;font-family:monospace;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;gap:1rem"><h1 style="color:#a259ff">SnapApps</h1><a href="/snapscored" style="color:#fff">SnapScored</a><a href="/snapunks" style="color:#fff">SnaPunks</a></body></html>`));

app.route("/snapscored", snapscored);
app.route("/snapunks", snapunks);

const port = Number(process.env.PORT) || 3003;
serve({ fetch: app.fetch, port });
console.log(`Snap running at http://localhost:${port}`);
