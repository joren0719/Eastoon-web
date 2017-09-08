const mongoose = require('mongoose');

var productSchema = new mongoose.Schema(
	{
		id:String,
        catagory:String,
        productType:String,
        productName:String,
        description:String,
        thumbnail:String,
        piclocation:String

    }, {
        collection: 'Products'
    }
);

/*
logRewardSchema.index({ accountId: 1, timestamp: 1 });
// Both accountId and eventId needs to be unique
logRewardSchema.index({ accountId: 1, eventId: 1 }, {
	unique: true,
	partialFilterExpression: {eventId: {$type: "string"}
}});*/

module.exports = productSchema;
