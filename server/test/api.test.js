require("dotenv").config();
const test = require("ava");
const request = require("supertest")(require(".."));

test("GET /api/ simple API call returns 200", async (t) => {
  const response = await request.get("/api/").send();
  t.is(response.body.ok, true);
});
