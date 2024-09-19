import { Hono } from "hono";
import api from "./routes/api";

const app = new Hono();

app.get("/", async (c) => {
  return c.text("Welcome to ScholarCore Server!");
});
app.route("/api", api);

export default {
  port: 2709,
  fetch: app.fetch,
};
