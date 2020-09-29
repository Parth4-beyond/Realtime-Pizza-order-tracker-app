const mongoose = require("mongoose");
const cartController = require("../http/controllers/customers/cartController");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: { type: Object, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    paymentType: { type: String, default: "COD" },
    status: { type: String, default: "order_placed" },
    totalQTY: { type: Number ,required: true },
    totalPrice: { type: Number,required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
