import mongoose, { schema } from "mongoose";

const UserSchema = new schema(
  {
    userName: {
      required: true,
      unique: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    phone: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: true,
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", UserSchema);

export { User };
