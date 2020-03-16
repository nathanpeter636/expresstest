let dbname = "wednesday_test";
let username = "root";
let password = "root";

//exports.atlas = `mongodb+srv://${username}:${password}@yoobee2020-vhp1l.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`;


exports.atlas = `mongodb://${username}:${password}@cluster0-shard-00-00-bbbaq.gcp.mongodb.net:27017,cluster0-shard-00-01-bbbaq.gcp.mongodb.net:27017,cluster0-shard-00-02-bbbaq.gcp.mongodb.net:27017/${dbname}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`