import { test, expect } from "@playwright/test";
import { AuthApi } from "../../src/api/AuthApi";
import { loginData } from "../../test-data/user.data";

test.describe("API Login", () => {

  test("Login thành công", async ({ request }) => {
    const authApi = new AuthApi(request);

    const response = await authApi.login(
      loginData.valid.username,
      loginData.valid.password
    );
    const body = await response.json();
    console.log(body);

    expect(response.status()).toBe(200);
  });

});