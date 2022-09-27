const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const config = require("./config");
const loaders = require("./loaders");
const {
  CategoryRoute,
  ProductRoute,
  RoleRoute,
  UserRoute,
  UserDetailRoute,
  CategoryPointRateRoute,
  MoneyPointRoute,
  OrderRoute,
} = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

config();
loaders();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/", (req, res) => {
  res.send("Server is started");
})
app.use("/categories", CategoryRoute);
app.use("/products", ProductRoute);
app.use("/roles", RoleRoute);
app.use("/users", UserRoute);
app.use("/userDetails", UserDetailRoute);
app.use("/categoryPointRates", CategoryPointRateRoute);
app.use("/moneypoints", MoneyPointRoute);
app.use("/orders", OrderRoute);

app.use(errorHandler);


app.listen(process.env.APP_PORT, (req, res) => {
  console.log("Server is started: ", process.env.APP_PORT);
});
