import supertest from "supertest";
import { app } from "../app.js";

const request = supertest(app);
//supertest startet ein port und kann man da testen, port das wir nicht kennen

test('Ich prüfe ob meine Route antwortet "/"', async () => {
  const response = await request.get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Hello Coder");
});

test("Ich erwarte das ich die Usermail von übersendeten User zurück bekomme", async () => {
  const response = await request
    .post("/")
    .send({ email: "c@s.de", name: "cs" })
    .set("Content_Type", "application/json");
  const email = await response.body.email;
  expect(response.statusCode).toBe(200);
  expect(email).toBe("c@s.de");
});
