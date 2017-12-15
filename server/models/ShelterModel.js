import mongoose, { Schema } from "mongoose";

const shelterSchema = new Schema({
  image: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  }
});

export default mongoose.model("List", listSchema);
