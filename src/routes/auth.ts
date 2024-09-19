import { Hono } from "hono";

const auth = new Hono();

auth.get("/signup", (c) => {
  return c.text("This is sign up route");
});

export default auth;
