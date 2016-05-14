const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodTruckSchema = new Schema({
    locationId: Number,
    applicant: String,
    facilityType: String,
    cnn: Number,
    locationDescription: String,
    Address:String,
    blocklot:String,
    block:String,
    lot:String,
    permit:String,
    status: String,
    foodItems:String,
    X:Number,
    Y:Number,
    latitude:Number,
    longitude:Number,
    schedule:String,
    location:String

})

const ModelClass = mongoose.model('FoodTrucks', FoodTruckSchema);
module.exports = ModelClass;
