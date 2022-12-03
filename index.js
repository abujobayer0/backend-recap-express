const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello from my super duper smarty sandle");
});
const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: 01746546532 },
  { id: 2, name: "sokina", email: "sokina@gmail.com", phone: 01746546532 },
  { id: 3, name: "nargis", email: "nargis@gmail.com", phone: 01746546532 },
  { id: 4, name: "sabnur", email: "sabnur@gmail.com", phone: 01746546532 },
  { id: 5, name: "suchita", email: "suchita@gmail.com", phone: 01746546532 },
  { id: 6, name: "sogir", email: "sogir@gmail.com", phone: 01746546532 },
  { id: 7, name: "sraboni", email: "sraboni@gmail.com", phone: 01746546532 },
  { id: 8, name: "sofura", email: "sofura@gmail.com", phone: 01746546532 },
];
app.get("/users", (req, res) => {
  console.log("query", req.query);
  if (req.query.name) {
    const search = req.query.name;
    const mached = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(mached);
  } else {
    res.send(users);
  }
});
app.use(express.json());
app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id == id);
  res.send(user);
});
app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});
app.get("/fruits/mango/fazli", (req, res) => {
  res.send("saur saur fazli flaver");
});
app.listen(port, () => {
  console.log("listening to port ", port);
});
