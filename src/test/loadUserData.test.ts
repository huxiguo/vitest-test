import { describe, test, expect } from "vitest";

import { loadUser } from "./loadUserData";

describe("loadUser", () => {
  test("should return user", () => {
    const user = loadUser();
    expect(user).toEqual({
      name: "zs",
      age: 18,
    });
  });
});
