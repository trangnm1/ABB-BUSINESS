import { test, expect } from "@playwright/test";
import { UserIdentification } from "../../src/Database/APP_USER_MANAGEMENT/UserIdentification";

test("Query user identification by username", async () => {
  const username = process.env.TEST_USERNAME!;
  const user = await UserIdentification.findByUsername(username);
  console.log(user); 
  expect(user).toBeDefined();
  expect(user).toMatchObject({
  USERNAME: username,
  FULL_NAME: "Nguyen Van A",
  PHONE: "0912345678",
});
});