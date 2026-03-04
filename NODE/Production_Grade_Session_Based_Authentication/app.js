import express from "express";
import session from "express-session";
import { RedisStore } from "connect-redis";
import { redisClient } from "./redisClient.js";
import bcrypt from "bcrypt";
import { v4 as uuid4 } from "uuid";

const app = express();
app.use(express.json());

// setup Redis Session Store
const store = new RedisStore({
  client: redisClient,
  prefix: "session",
});

// Global Middleware
app.use(
  session({
    store,
    secret: "this is secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // true in production
      maxAge: 1000 * 60 * 30, // 30minute
    },
  }),
);

// Fake DB
const users = [
  {
    id: 1,
    email: "leosathya101010@gmail.com",
    password: bcrypt.hashSync("password", 10),
  },
];

// Helper function -- Middleware
const auth = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
};

// Routes

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // find user
  const user = users.find((u) => u.email === email);
  if (!user) res.status(401).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) res.status(401).json({ message: "Wrong Password" });

  // session creation
  req.session.user = {
    id: user.id,
    email: user.email,
  };

  res.json({ message: "Logged In Sucessfully" });
});

app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Profile Data",
    user: req.session.user,
  });
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout Failed" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logged Out" });
  });
});

app.listen(3000, () => {
  console.log(`Server Running On Port :: 3000`);
});
