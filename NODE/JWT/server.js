import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const PORT = 3000;
const JWT_SECRET = "Top Secret";

const authenticate = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) res.status(401).send("Authorization key not present");

  const token = header.split(" ")[1];

  console.log(token);

  // verify token
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) res.status(400).send("Invalide Key");
    console.log(user);
    req.user = user;
    next();
  });
};

app.post("/login", (req, res) => {
  const { userName, password } = req.body;
  // Dummy Verification
  if (userName === "sathya" && password === "1234") {
    // Sign JWT
    const key = jwt.sign(
      {
        userId: 1,
        userName,
      },
      JWT_SECRET,
      {
        expiresIn: 60,
      },
    );

    res.json({ Key: key });
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/dashboard", authenticate, (req, res) => {
  res
    .status(201)
    .send({ message: `Hellow, Welcome Back ${req.user.userName}` });
});

app.get("/", (req, res) => {
  res.send({ message: "Hellow" });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port : ${PORT}`);
});
