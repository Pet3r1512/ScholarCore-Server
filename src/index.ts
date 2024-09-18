import { Hono } from "hono";
import prisma from "./db";

const app = new Hono();

app.get("/", async (c) => {
  const count = await prisma.user.count();
  return c.text(`Welcome to ScholarCore Server! ${count}`);
});

export default {
  port: 2709,
  fetch: app.fetch,
};
