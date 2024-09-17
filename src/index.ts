import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Welcome to ScholarCore Server!");
});

export default {
  port: 2709,
  fetch: app.fetch,
};
