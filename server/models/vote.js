import mongoose from "mongoose";

const { Schema } = mongoose;

const voteSchema = new Schema({
    policyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Policy"
    },
    voteType: {
        type: String,
        enum: ["Harmful","Helpfull"]
    },
    votedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
}
});

voteSchema.set("timestamps",true);

const Vote = mongoose.model("vote",voteSchema);

export default Vote;