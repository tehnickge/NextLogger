import ChatRoomModel from "@/models/ChatRoom";
import connectToDatabase from "@/utils/mongo";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

export type IChatRoom = {
  chatRoomId: string;
  name: string;
  createdAt: Date;
  event: string;
};

const chatroomSchema = yup.object().shape({
  chatRoomId: yup.string().required(),
  name: yup.string().required(),
  createdAt: yup.date().required(),
  event: yup.string().optional(),
});

const getChatRooms = async () => {
  try {
    await connectToDatabase();
    const chatRooms = await ChatRoomModel.find({});
    return NextResponse.json(chatRooms, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

const postChatRoom = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const body: IChatRoom = await req.json();
    const chatRoom = await chatroomSchema.validate(body, { abortEarly: false });
    const newChatRoom = await new ChatRoomModel({
      chatRoomId: chatRoom.chatRoomId,
      name: chatRoom.name,
      createdAt: chatRoom.createdAt,
      event: chatRoom.event,
    });
    await newChatRoom.save();
    return NextResponse.json(newChatRoom, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export { getChatRooms as GET, postChatRoom as POST };
