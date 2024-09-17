import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Welcome to ScholarCore Server!");
});

export default app;
