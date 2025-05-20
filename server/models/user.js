import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/\S+@\S+\.\S+/,'Invalid email address']
    },
    password: {
        type:String,
        required: true,
        minlength: 6,
    },
    name: {
        type: String,
        required: false,
        trim: true
    },
    role: {
       type: String,
       enum: ["citizen","moderator","admin"],
       default: "citizen" 
    }
});

const User = mongoose.model('user',userSchema);

export default User;