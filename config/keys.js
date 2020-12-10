const dbPassword =
  "mongodb://admin:eats442@cluster0-shard-00-00.i7zq8.mongodb.net:27017,cluster0-shard-00-01.i7zq8.mongodb.net:27017,cluster0-shard-00-02.i7zq8.mongodb.net:27017/users?ssl=true&replicaSet=atlas-bwrvyn-shard-0&authSource=admin&retryWrites=true&w=majority";
const dbRestaurants =
  "mongodb://admin:eats442@cluster0-shard-00-00.i7zq8.mongodb.net:27017,cluster0-shard-00-01.i7zq8.mongodb.net:27017,cluster0-shard-00-02.i7zq8.mongodb.net:27017/restaurants?ssl=true&replicaSet=atlas-bwrvyn-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports = {
  mongoURI: dbPassword,
  restURI: dbRestaurants,
};
