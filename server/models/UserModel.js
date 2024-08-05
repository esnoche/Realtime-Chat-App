import { genSalt, hash } from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        requied: [true, "Email is required."],
        unique: true
    },
    password:{
        type:String,
        requied: [true, "Password is required."],
    },
    firstName:{
        type:String,
        requied: false
    },
    lastName:{
        type:String,
        requied: false
    },
    image:{
        type:String,
        requied: false
    },
    color:{
        type:Number,
        requied: false
    },
    profileSetup:{
        type:Boolean,
        default:false
    }

})

userSchema.pre("save", async function(next){
    const salt = await genSalt();
    this.password= await hash(this.password, salt);
    next();
});

const User = mongoose.model("Users", userSchema);
export default User;