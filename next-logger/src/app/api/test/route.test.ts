import { NextResponse } from "next/server";
import { GET } from "./route"; // Путь к вашему API маршруту
import supertest from "supertest";

// Для работы с тестами HTTP запросов
const request = supertest("http://localhost:3000");

describe("GET /api/test", () => {
  it("should return a successful response", async () => {
    const response = await request.get("/api/test");

    expect(response.status).toBe(200); // Проверка статуса ответа
    expect(response.body).toBe("he"); // Проверка тела ответа
  });
});
