var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// this will be our data base's data structure
var OrdersSchema = new Schema(
  {
    order_item: String,
    order_quanity: Number,
    order_id: Number,
    price: Number,
    
  },
  {
    timestamps: true
  }
);

// singular capitalized name for the mongo collection
module.exports = mongoose.model("Order", OrdersSchema);

//https://mongoosejs.com/docs/models.html
