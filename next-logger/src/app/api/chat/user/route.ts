import UserModel from "@/models/User";
import connectToDatabase from "@/utils/mongo";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

type IUser = {
  chatRoomId: string;
  name: string;
  createdAt: Date;
};

const userSchema = yup.object().shape({
    userId: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().required(),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required()
});

const getUsers = async () => {
  try {
    await connectToDatabase();
    const users = await UserModel.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

const postUser = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const body: IUser = await req.json();
    const user = await userSchema.validate(body, { abortEarly: false });
    const newUser = await new UserModel({
      userId: user.userId,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
    await newUser.save();
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export { getUsers as GET, postUser as POST };
