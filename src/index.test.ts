import { describe, test } from "@jest/globals";
import { milestonePush } from "mr-tools-lib";

describe("milestones", () => {
  test("milestone check", async () => {
    await milestonePush();
  });
});
