const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	key_id: rzp_test_4I8rLX1ZOlUiSy,
	key_secret: process.env.RAZORPAY_SECRET,
});
