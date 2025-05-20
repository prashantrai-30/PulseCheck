import mongoose from "mongoose";

const {Schema} = mongoose;

const policySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true
    },
    tags: {
        type:[String],
        default: []
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    comments: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Comment" 
        }
    ],
    votes: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Vote" 
        }
    ],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});

policySchema.set('timestamps',true);

const Policy = mongoose.model('policy',policySchema);

export default Policy;