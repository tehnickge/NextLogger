import mongoose, { Schema, Document } from 'mongoose';

interface IChatRoom extends Document {
  chatRoomId: string;
  name: string;
  createdAt: Date;
}

const ChatRoomSchema = new Schema<IChatRoom>({
  chatRoomId: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ChatRoom = mongoose.models.ChatRoom || mongoose.model<IChatRoom>('ChatRoom', ChatRoomSchema);

export default ChatRoom;
