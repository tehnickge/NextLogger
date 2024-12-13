import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

export interface Message {
  id: string;
  content: string;
  createdAt: Date;
  senderId: string;
  sender?: string;
  chatRoom?: string;
  chatRoomId: string;
}

const messageSchema = yup.object().shape({
  id: yup.string().required(),
  content: yup.string().required(),
  createdAt: yup.date().required(),
  senderId: yup.string().required(),
  sender: yup.string().optional(),
  chatRoom: yup.string().optional(),
  chatRoomId: yup.string().required(),
});

const getMessages = async (req: NextRequest) => {
  try {
    const messages = await prisma.message.findMany({});
    return NextResponse.json({ messages }, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

const PostMessage = async (req: NextRequest) => {
  try {
    const body: Message = await req.json();

    console.log(body);
    const message: Message = await messageSchema.validate(body, {
      abortEarly: false,
    });
    console.log(message);
    return NextResponse.json({});
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      // Возвращаем ошибки валидации
      return NextResponse.json({ errors: err.errors }, { status: 400 });
    }
    return NextResponse.json(err, { status: 500 });
  }
};

export { getMessages as GET, PostMessage as POST };
