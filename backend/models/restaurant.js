import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    address: {
        building: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        }
    },
    contact: {
        phone: String,
        email: String
    }
});
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;