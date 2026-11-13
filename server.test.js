const request = require("supertest");
const app = require("../server");

describe("API Endpoints", () => {
  it("should return a welcome message on GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
  });

  it("should return health status on GET /health", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual("UP");
  });
});
