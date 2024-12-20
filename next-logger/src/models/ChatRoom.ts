import mongoose, { Schema, Document } from "mongoose";

interface IChatRoom extends Document {
  chatRoomId: string;
  name: string;
  createdAt: Date;
  event: string;
}

const ChatRoomSchema = new Schema<IChatRoom>({
  chatRoomId: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  event: { type: String, required: false },
});

const ChatRoomModel =
  mongoose.models.ChatRoom ||
  mongoose.model<IChatRoom>("ChatRoom", ChatRoomSchema);

export default ChatRoomModel;
