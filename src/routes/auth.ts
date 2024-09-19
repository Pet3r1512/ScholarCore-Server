import { Hono } from "hono";

const auth = new Hono();

auth.post("");

export default auth;
