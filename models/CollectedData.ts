import mongoose, { Schema } from "mongoose";

const collectedDataSchema = new Schema({});



const CollectedData = mongoose.model('CollectedData', collectedDataSchema);

export default CollectedData;