/* eslint-disable */
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import * as Yup from "yup";
import { IServiceAuth } from "../login/route";
import connectToDatabase from "@/utils/mongo";
import ServiceAuthModel from "@/models/ServiceAuth";

// Схема валидации пользователя
const serviceSchema: Yup.Schema<IServiceAuth> = Yup.object().shape({
  serviceName: Yup.string().required().min(1),
  servicePassword: Yup.string().required().min(1),
});

// Проверка наличия пользователя в базе данных
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
// Основная функция обработки запроса
export async function POST(req: Request) {
  try {
    const service: IServiceAuth = await req.json();

    // Валидация входящих данных
    const validatedService = await serviceSchema.validate(service, {
      abortEarly: false,
    });

    // Проверка существования имени пользователя и почты
    if (await validService(validatedService)) {
      return NextResponse.json(
        {
          error:
            "ERROR_MESSAGES.NAME_EXISTS" +
            " or " +
            "ERROR_MESSAGES.EMAIL_EXISTS",
        },
        { status: 402 }
      );
    }

    // Хэширование пароля
    const hashedPassword = await bcrypt.hash(
      validatedService.servicePassword,
      10
    );

    // Создание нового пользователя
    const createdService = await new ServiceAuthModel({
      serviceName: validatedService.serviceName,
      servicePassword: hashedPassword,
    });
    createdService.save();
    return NextResponse.json(createdService, { status: 200 });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return NextResponse.json(error);
    }
    console.error("Ошибка при создании пользователя:", error);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}

