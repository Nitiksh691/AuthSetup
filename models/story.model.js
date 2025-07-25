// models/User.js
import mongoose, { Mongoose } from "mongoose";

const { Schema, model } = mongoose;

const StorySchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  mediaType: {
    type: String,
    enum:["video","photo"],
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
  ],
  views:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
  ],
  createdAt:{
    type:Date(),
    default:Date.now(),
    expires:86400
  }
});

const Story = model("Story", StorySchema);
export default Story;
