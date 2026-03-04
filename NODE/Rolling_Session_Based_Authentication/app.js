import express from "express";
import session from "express-session";
import { RedisStore } from "connect-redis";
import redisClient from "./redisClient.js";
import bcrypt from "bcrypt";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(express.json());

const SESSION_IDLE_TIMEOUT = 30 * 60 * 1000; // 30 min
const SESSION_ABSOLUTE_TIMEOUT = 8 * 60 * 60 * 1000; // 8 HOURS

const store = new RedisStore({
  client: redisClient,
  prefix: "sess:",
});

app.use(
  session({
    store,
    name: "SID",
    secret: "top secret",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: SESSION_IDLE_TIMEOUT,
    },
  }),
);

// Helper Function
const auth = (req, res, next) => {
  if (!req.sesson.userId)
    return res.status(403).json({ message: "No SeesionID" });

  // Absolute timeout check
  const now = Date.now();
  if (now - req.session.createdAt > SESSION_ABSOLUTE_TIMEOUT) {
    req.session.destroy(() => {});
    return res.status(401).json({ message: "Session Expired" });
  }
  next();
};

// Dummy DB
const users = [
  {
    id: 1,
    email: "leosas10@gmail.com",
    password: bcrypt.hashSync("password", 10),
  },
];

// Routes
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "User Not Found" });

  // compair password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(404).json({ message: "User Not Found" });

  // session regeneration
  req.session.regenerate((err) => {
    if (err) return res.status(401).json({ message: "Errror" });

    req.session.userId = user.id;
    req.session.createdAt = Date.now();

    res.json({ message: "Login Sucessful" });
  });
});

app.post("/logout", (req, res) => {
  res.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Logout Failed" });
    // res.clearCookie("connect.sid"); // default, Express.js session middleware creates a cookie named:
    // Cookie: connect.sid=s%3Aabc123xyz...
    res.clearCookie("SID"); // My custom cookie name

    res.json({ message: "Logged Out" });
  });
});

app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Profile Data",
    userId: req.session.userId,
  });
});

app.listen(3000, () => {
  console.log(`Server Is Running on port : 3000`);
});
