/* eslint-disable */
import connectToDatabase from "@/utils/mongo";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import ServiceAuthModel from "@/models/ServiceAuth";

export type IServiceAuth = {
  serviceName: string;
  servicePassword: string;
};

const validService = async (service: IServiceAuth): Promise<boolean> => {
  await connectToDatabase();

  const checkService = await ServiceAuthModel.findOne({
    serviceName: service.serviceName,
  });
  if (checkService) {
    return (
      (await bcrypt.compare(
        service.servicePassword,
        checkService?.servicePassword
      )) && service.serviceName === checkService.serviceName
    );
  }
  return false;
};

const login = async (req: NextRequest, res: NextResponse) => {
  try {
    const serviceData: IServiceAuth = await req.json();
    if (!(await validService(serviceData))) {
      return NextResponse.json({ error: "bad args" }, { status: 400 });
    }

    if (!serviceData) {
      return NextResponse.json({ error: 400 });
    }
    const serviceJWT = {
      serviceName: serviceData.serviceName,
      servicePassword: serviceData.servicePassword,
    };

    const token = jwt.sign(
      serviceJWT,
      process.env.NEXT_PUBLIC_JWT_SECRET || "",
      {
        expiresIn: "1d",
      }
    );

    const response = NextResponse.json(
      { test: serviceData, token: token },
      { status: 200 }
    );

    response.cookies.set("jwt_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export { login as POST };
