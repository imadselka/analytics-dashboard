import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://eu1-pro-rat-39350.upstash.io",
  token: process.env.REDIS_KEY!,
});
