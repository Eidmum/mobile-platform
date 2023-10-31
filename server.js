const moongose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
console.log(process.env);
const port = 3000;
const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

//DB connection
moongose.connect(DB).then((con) => {
  console.log(con.connection);
  console.log("sucessfully connected to database");
});


app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
