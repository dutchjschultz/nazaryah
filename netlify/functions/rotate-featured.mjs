import { schedule } from "@netlify/functions";

// Daily rebuild (1011): the homepage's Last 30 Days window is computed at build
// time, so without a build on quiet days pieces older than 30 days would stay
// up. (It was first set up to turn the old Featured Picks rotation at dawn;
// that rotation is retired, the schedule is unchanged.)
// 12:00 UTC = 8:00 AM EDT / 7:00 AM EST. One cron, no seasonal drift.
// Requires the BUILD_HOOK_URL env var (a Netlify build hook) to be set.
export const handler = schedule("0 12 * * *", async () => {
  await fetch(process.env.BUILD_HOOK_URL, { method: "POST" });
  return { statusCode: 200 };
});
