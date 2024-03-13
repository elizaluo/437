import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "../profile";

const profileSchema = new Schema<Profile>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    avatar: { data: Buffer, contentType: String },
    color: {
      type: String,
      trim: true,
      validate(value: String) {
        if (!value.match(/^#[0-9a-fA-F]{6}$/)) {
          throw new Error(
            "Invalid color, must be 6-digit hexcode."
          );
        }
      }
    }
  },
  { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;
