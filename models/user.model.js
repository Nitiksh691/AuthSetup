// models/User.js
import mongoose, { Mongoose } from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  profoleImg: {
    type: String,
  },
  following:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  ],
  follower:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  ],
  saved:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reel"

    }
  ],
  reel:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reel"
    }
  ],
  story: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Story"
  },


  //  OTP Verification

  resetOTP:{type:String},
  expiresOTP:{type:Date},
  isOTPVerified:{type:Boolean,default:false}
},{timestamps:true});

const User = model("User", UserSchema);
export default User;
