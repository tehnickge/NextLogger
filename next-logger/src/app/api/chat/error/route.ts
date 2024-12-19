import ErrorModel from "@/models/Error";
import connectToDatabase from "@/utils/mongo";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

export type IError = {
  module: string;
  event: string;
  info: string;
  createdAt: Date;
};

const errorSchema = yup.object().shape({
  module: yup.string().required(),
  event: yup.string().required(),
  info: yup.string().required(),
  createdAt: yup.date().required(),
});

const getErrors = async () => {
  try {
    await connectToDatabase();
    const errors = await ErrorModel.find({});
    return NextResponse.json(errors, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

const postError = async (req: NextRequest) => {
  try {
    const body: IError = await req.json();
    await connectToDatabase();
    const error = await errorSchema.validate(body);
    const newError = await new ErrorModel({
      module: error.module,
      event: error.event,
      info: error.info,
      createdAt: error.createdAt,
    });
    await newError.save();
    return NextResponse.json(newError, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export { getErrors as GET, postError as POST };
