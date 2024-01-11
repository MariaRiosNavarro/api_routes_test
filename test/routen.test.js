import supertest from "supertest";
import { app } from "../app.js";

const request = supertest(app);

describe('Route "/" GET', () => {
  test('Ich prüfe ob meine Route antwortet "/", get route', async () => {
    const response = await request.get("/");
    expect(response.statusCode).toBe(200);
  });
  test('Ich prüfe ob den antwort text correct ist "/", get route', async () => {
    const response = await request.get("/");
    expect(response.text).toBe("Hello Coder");
  });
});

describe('Route "/" POST', () => {
  test('Ich erwarte das ich die Usermail von übersendeten User zurück bekomme "/", port route ', async () => {
    const response = await request
      .post("/")
      .send({ email: "c@s.de", name: "cs" })
      .set("Content_Type", "application/json");
    const email = await response.body.email;
    expect(response.statusCode).toBe(200);
    expect(email).toBe("c@s.de");
  });
});
