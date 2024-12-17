import MessageModel from "@/models/Message";
import Message from "@/models/Message";
import Test from "@/models/Test";
import connectToDatabase from "@/utils/mongo";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

export interface Message {
  id?: string;
  messageId: string;
  content: string;
  createdAt?: Date;
  senderId: string;
  sender?: string;
  chatRoom?: string;
  chatRoomId: string;
}

const messageSchema = yup.object().shape({
  id: yup.string().optional(),
  messageId: yup.string().required(),
  content: yup.string().required(),
  createdAt: yup.date().optional(),
  senderId: yup.string().required(),
  sender: yup.string().optional(),
  chatRoom: yup.string().optional(),
  chatRoomId: yup.string().required(),
});

const getMessages = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const messages = Message.find({});
    return NextResponse.json({ messages }, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

const PostMessage = async (req: NextRequest) => {
  try {
    const body: Message = await req.json();
    await connectToDatabase();

    const message: Message = await messageSchema.validate(body, {
      abortEarly: false,
    });

    const newMsg = await new MessageModel({
      messageId: message.messageId,
      content: body.content,
      createdAt: message.createdAt,
      senderId: message.senderId,
      sender: message.sender,
      chatRoomId: message.chatRoomId,
      chatRoom: message.chatRoom,
    });

    await newMsg.save();
    return NextResponse.json(newMsg, { status: 200 });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      // Возвращаем ошибки валидации
      return NextResponse.json({ errors: err.errors }, { status: 400 });
    }
    return NextResponse.json(err, { status: 500 });
  }
};

export { getMessages as GET, PostMessage as POST };
