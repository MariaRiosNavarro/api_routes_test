import express from "express";

export const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.end("Hello Coder");
});
app.post("/", (req, res) => {
  const user = req.body;
  res.json({ email: user.email });
});
app.put("/", (req, res) => {});
app.delete("/", (req, res) => {});
