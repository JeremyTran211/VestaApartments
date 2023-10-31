const express = require("express");
const app = express();
const port = 3000;
const listingsRouter = require("./routes/listings");
const usersRouter = require("./routes/users");
const registrationRouter = require("./routes/registration");
const searchRouter = require("./routes/search");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Connection test is Valid" });
});

app.use("/listings", listingsRouter);
app.use("/search", searchRouter);
app.use("/users", usersRouter);
app.use('/register', registrationRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  return;
});

app.listen(port, () => {
  console.log(`Backend node express servicing REST API at http://localhost:${port}`);
});
