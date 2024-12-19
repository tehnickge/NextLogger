import mongoose, { Schema, Document } from "mongoose";

interface IUserChatRoom extends Document {
  userChatRoomId: string;
  userId: string;
  chatRoomId: string;
  userID: string;
  chatRoom: string;
  joinedAt: Date;
}

const UserChatRoomSchema = new Schema<IUserChatRoom>({
  userChatRoomId: { type: String, required: true },
  userId: { type: String, required: true },
  chatRoomId: { type: String, required: true },
  userID: { type: String, required: true },
  chatRoom: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
});

const UserChatRoomModel =
  mongoose.models.UserChatRoom ||
  mongoose.model<IUserChatRoom>("UserChatRoom", UserChatRoomSchema);

export default UserChatRoomModel;
