import mongoose, { Schema, Document } from "mongoose";

interface IUserChatRoom extends Document {
  userChatRoomId: string;
  userId: string;
  chatRoomId: string;
  chatRoom: string;
  joinedAt: Date;
  event: string;
}

const UserChatRoomSchema = new Schema<IUserChatRoom>({
  userChatRoomId: { type: String, required: true },
  userId: { type: String, required: true },
  chatRoomId: { type: String, required: true },
  chatRoom: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
  event: { type: String, required: false },
});

const UserChatRoomModel =
  mongoose.models.UserChatRoom ||
  mongoose.model<IUserChatRoom>("UserChatRoom", UserChatRoomSchema);

export default UserChatRoomModel;
