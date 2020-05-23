require("dotenv").config();
const test = require("ava");
const request = require("supertest")(require(".."));

test("GET /api/articles returns list of articles", async (t) => {
  const response = await request.get("/api/articles").send();
  t.is(response.body.ok, true);
  t.truthy(response.body.articles);
});
