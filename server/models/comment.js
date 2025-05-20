import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
    policyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Policy",
        required: true
    },
    text: {
        type: String,
        trim: true
    },
    sentiment: {
        type: String,
        enum:["Positive,Negative,Neutral"],
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        requied: true
    }
});

commentSchema.set('timestamps',true);

const Comment = mongoose.model('comment',commentSchema);

export default Comment;