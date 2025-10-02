import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true },
    email:    { type: String, required: true },
    password: { type: String, required: true },
    created:  { type: Date, default: Date.now },
    updated:  { type: Date, default: Date.now }
  },
  { timestamps: true, collection: "users" }
);

userSchema.pre("save", function (next) {
  this.updated = new Date();
  next();
});

export default mongoose.model("User", userSchema);
