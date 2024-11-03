import { genSalt, hash } from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    color: {
        type: Number,
        required: false
    },
    profileSetup: {
        type: Boolean,
        default: false
    }
});

// Hash password before saving the user
userSchema.pre("save", async function(next) {
    const salt = await genSalt(10);  // Specify salt rounds
    this.password = await hash(this.password, salt);
    next();
});

const User = mongoose.model("Users", userSchema);
export default User;
