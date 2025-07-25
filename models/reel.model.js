// models/User.js
import mongoose, { Mongoose } from "mongoose";

const { Schema, model } = mongoose;

const ReelSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
 
  media: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
  likes:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  ],
  comments:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  ]
});

const Reel = model("Reel", ReelSchema);
export default Reel;
