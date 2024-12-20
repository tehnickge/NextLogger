import UserChatRoomModel from "@/models/UserChatRoom";
import connectToDatabase from "@/utils/mongo";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

export type IUserChatRoom = {
  userChatRoomId: string;
  userId: string;
  chatRoomId: string;
  chatRoom: string;
  joinedAt: Date;
  event: string;
};

const userChatRoomSchema = yup.object().shape({
  userChatRoomId: yup.string().required(),
  userId: yup.string().required(),
  chatRoomId: yup.string().required(),
  userID: yup.string().required(),
  chatRoom: yup.string().required(),
  joinedAt: yup.date().required(),
  event: yup.string().optional(),
});

const getUserInChatRoom = async () => {
  try {
    await connectToDatabase();
    const userInChatRoom = await UserChatRoomModel.find({});
    return NextResponse.json(userInChatRoom, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

const postUserInChatRoom = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const body: IUserChatRoom = await req.json();
    const userInChat = await userChatRoomSchema.validate(body, {
      abortEarly: false,
    });
    const newUserInChatRoom = await new UserChatRoomModel({
      userChatRoomId: userInChat.userChatRoomId,
      userId: userInChat.userId,
      chatRoomId: userInChat.chatRoomId,
      chatRoom: userInChat.chatRoom,
      joinedAt: userInChat.joinedAt,
      event: userInChat.event,
    });
    await newUserInChatRoom.save();
    return NextResponse.json(newUserInChatRoom, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export { getUserInChatRoom as GET, postUserInChatRoom as POST };
