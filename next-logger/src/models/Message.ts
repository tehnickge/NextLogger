import mongoose, { Schema, Document } from 'mongoose';

interface IMessage extends Document {
  messageId: string;
  content: string;
  createdAt: Date;
  senderId: string;
  sender: string;
  chatRoomId: string;
  chatRoom: string;
}

const MessageSchema = new Schema<IMessage>({
  messageId: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  senderId: { type: String, required: true },
  sender: { type: String, required: true },
  chatRoomId: { type: String, required: true },
  chatRoom: { type: String, required: true },
});

const Message = mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);

export default Message;
