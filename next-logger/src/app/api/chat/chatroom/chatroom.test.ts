import supertest from "supertest";

// Для работы с тестами HTTP запросов
const request = supertest("http://localhost:3000");

describe("POST /api/chatroom", () => {
  it("should return a successful response", async () => {
    const postData = {
      chatRoomId: "test",
      createdAt: "2024-12-11T00:00:00.000Z",
      name: "name1",
    };

    const response = await request.post("/api/chat/chatroom").send(postData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        chatRoomId: "test",
        createdAt: "2024-12-11T00:00:00.000Z",
        name: "name1",
      })
    );
  });

  it("should return a error response", async () => {
    const postData = {
      createdAt: "2024-12-11T00:00:00.000Z",
      name: "name1",
    };

    const response = await request.post("/api/chat/chatroom").send(postData);

    expect(response.status).toBe(500);
    expect(response.body.errors).toEqual(["chatRoomId is a required field"]);
  });
});
