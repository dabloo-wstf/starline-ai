import { Schema, model } from "mongoose";

const WaitlistUserSchema = new Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },  
  phone_number: { type: String  },
  professional_role: { type: String },
  organization: { type: String },
  location: { type: String },
  firm_size: { type: String },
  book_demo: { type: Boolean, default: false },
}, { timestamps: true });

export const WaitlistUser = model("WaitlistUser", WaitlistUserSchema);
