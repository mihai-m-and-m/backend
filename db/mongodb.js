/*********************************
 ** MongoDB DATABASE CONNECTION **
 *********************************/
const { error_set } = require("../errors/error_logs");
const mongoose = require("mongoose");

/****************************
 * Check Database connection
 */
const connectDB = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Connected`);
  } catch (err) {
    error_set("Database connection failure", err.message);
  }
};

module.exports = { connectDB };
