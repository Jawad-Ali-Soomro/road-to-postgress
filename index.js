const express = require("express");
const { Pool } = require("pg");
require("dotenv").config({ path: "./.env" });
const app = express();
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool
  .connect()
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log(process.env.DB_PASSWORD);

app.listen(process.env.PORT, () => {
  console.log("working on port");
});
