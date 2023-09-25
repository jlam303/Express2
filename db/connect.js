const mongoose = require('mongoose');

const connectDB = () => {
  const connectString =
    'mongodb+srv://jlam303:7MSgfTPaRm0dVGX6@jonathancluster.uojkfau.mongodb.net/';

  mongoose
    .connect(connectString)
    .then(() => console.log('connected'))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
