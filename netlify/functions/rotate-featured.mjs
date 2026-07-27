import { schedule } from "@netlify/functions";

// Daily rebuild so the static Featured Picks board turns over at dawn.
// 12:00 UTC = 8:00 AM EDT / 7:00 AM EST — both land after the queue's
// DAWN_HOUR = 6 (ET) boundary under either offset, so the board is always
// rebuilt after the day has turned. One cron, no seasonal drift.
// Requires the BUILD_HOOK_URL env var (a Netlify build hook) to be set.
export const handler = schedule("0 12 * * *", async () => {
  await fetch(process.env.BUILD_HOOK_URL, { method: "POST" });
  return { statusCode: 200 };
});
