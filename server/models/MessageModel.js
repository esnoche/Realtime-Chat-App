import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: false // This should be required if it's not a channel message
    },
    messageType: {
        type: String,
        enum: ["text", "file"],
        required: true // The messageType should always be required
    },
    content: {
        type: String,
        required: function () {
            return this.messageType === "text";
        }
    },
    fileUrl: {
        type: String,
        required: function () {
            return this.messageType === "file";
        }
    },
    timestamp: {
        type: Date,
        default: Date.now // Use Date.now as a function
    }
});

const Message = mongoose.model("Messages", messageSchema);

export default Message;
