const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: "500mb",
  })
);
app.use(bodyParser.json());

const categoryRouter = require("./routes/category-routes");
const tagRouter = require("./routes/tag-routes");
const productRouter = require("./routes/product-routes");

app.use("/categories/", categoryRouter);
app.use("/tags/", tagRouter);
app.use("/products/", productRouter);

app.listen(process.env.PORT, () =>
  console.log("Server Runs On Port =>" + process.env.PORT)
);
