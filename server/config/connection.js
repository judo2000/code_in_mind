const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI || "mongodb://127.0.0.1/code-in-mindDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  }
);

module.exports = mongoose.connection;
