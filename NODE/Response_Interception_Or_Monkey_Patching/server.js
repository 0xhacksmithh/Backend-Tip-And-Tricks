import express from "express";

const app = express();
const PORT = 3000;

// Middleware
const responseInterceptor = (req, res, next) => {
  const oldResponse = res.json.bind(res);
  // Intercepting
  res.json = (body) => {
    console.log("Interceptor Responce: ", body);
    return oldResponse(body);
  };

  next();
};

// Rouutes
app.post("/textMe", responseInterceptor, (req, res) => {
  //const { name, text } = req.body;

  res.status(201).json({
    message: "Repling",
    name: "sathya",
    text: "textinggggg",
  });
});

app.listen(PORT, () => {
  console.log(`Server Running On PORT :: ${PORT}`);
});
