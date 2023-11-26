const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;
const listingsRouter = require("./routes/listings");
const usersRouter = require("./routes/users");
const registrationRouter = require("./routes/registration");
const searchRouter = require("./routes/search");
const screeningRouter = require("./routes/screening");
const loginRouter = require("./routes/login");
const socialMediaAPI = require("./routes/socialMediaAPI");
const accountType = require("./routes/accountType");

const numberVerificationRouter = require("./routes/number_verification");
const postRouter = require("./routes/post");


const authentication = require('./middleware/authentication');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get('/protected', authentication, (req, res) => {
  res.json({ message: 'Protected route accessed' });
});
app.get("/", (req, res) => {
  res.json({ message: "Connection test is Valid" });
});
app.use(cors());
app.use("/listings", listingsRouter);
app.use("/search", searchRouter);
app.use("/screening", screeningRouter);
app.use("/users", usersRouter);
app.use('/register', registrationRouter);
app.use('/login', loginRouter);
app.use('/number_verification' , numberVerificationRouter);
app.use("/post", postRouter);
app.use("/socialMediaAPI", socialMediaAPI);
app.use("/accountType", accountType);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  return;
});

app.listen(port, () => {
  console.log(`Backend node express servicing REST API at http://localhost:${port}`);
});

