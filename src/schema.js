import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    emailid: {
      type: String,
    },
    phoneno: {
      type: String,
    },
    companyname: {
      type: String,
    },
    domain: {
      type: String,
    },
    numberofcan: {
      type: String,
    },
    mode: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true },
);

const model = mongoose.model("accredian_clone", schema);

export default model;
