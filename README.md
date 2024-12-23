# ChatLogger API

ChatLogger API — это проект, предоставляющий интерфейсы для сохранения логов сервиса "Чат", сообщениями и логированием событий. Проект разработан с использованием **NextJS** и **MongoDB** и поддерживает взаимодействие через REST API.

## 📖 Оглавление

- [Описание](#-описание)
- [Технологии](#-технологии)
- [Функциональность](#-функциональность)
- [Установка](#-установка)
- [Использование](#-использование)
- [Тестирование](#-тестирование)
- [Схема данных](#-схема-данных)
---

## 📝 Описание

**ChatLogger API** — это бэкенд для работы с чатами, в том числе:

- Управление комнатами чатов.
- Отправка и получение сообщений.
- Логирование ошибок.
- Поддержка аутентификации сервисов.

Проект разрабатывался с целью изучения проектирования систем и технологий веб-разработки.

---

## 🚀 Технологии

- **Node.js**
- **NextJS**
- **MongoDB** с использованием **Mongoose**
- **TypeScript**
- **Jest** для тестирования

---

## 🔧 Функциональность

1. **Логирование**:
   - Сохранение и просмотр ошибок.
2. **Аутентификация сервисов**:
   - Хранение данных для аутентификации внешних сервисов.
3. **Просмотр логов**:
   - Веб интерфейс для просмотра логов.

---

## 📦 Установка

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/your-username/ChatLogger.git
   cd ChatLogger
   ```
2. **Установите зависимости**:
   ```bash
   npm install
   ```
3. **Создайте файл конфигурации: Создайте .env файл и добавьте следующие переменные**:
   ```env
   DATABASE_URL="mongodb://root:root@127.0.0.1:27017/admin"
   MONGO_URI="mongodb://root:root@localhost:27017/admin"
   JWT_SECRET="samplejwt"
   NEXT_PUBLIC_JWT_SECRET="samplejwt"
   ```
4. **Запустите образ mongodb docker-compose**:
    ```bash
   docker-compose up 
   ```
5. **Запустите локальный сервер**:
   ```bash
   npm run dev
   ```

## ⚙ Использование

После запуска сервера API будет доступен по адресу **http://localhost:3000**. Вот примеры основных эндпоинтов:
1. Чат-комнаты
**Создать лог комнаты**:
   - **POST** /api/chat/chatroom.
- Тело запроса:
   ```json
   {
    "createdAt": "2024-12-11T00:00:00.000Z",
    "chatRoomId": "4343",
    "name": "name1",
    "event": "create chatroom"
   }
   ```
- Получить список комнат:
   - GET /api/chat/chatroom

## 🧪 Тестирование
   
   ```bash
   npm test
   ```

## 📂 Схема данных

1. **ChatRoom**
   ```TS
   {
     chatRoomId: string;
     name: string;
     createdAt: Date;
     event: string;
   }
   ```
2. **Error**
   ```TS
   {
     module: string;
     event: string;
     info: string;
     createdAt: Date;
   }
   ```
3. **Message**
   ```TS
   {
     messageId: string;
     content: string;
     createdAt: Date;
     senderId: string;
     sender: string;
     chatRoomId: string;
     chatRoom: string;
   }
   ```
4. **ServiceAuth**
   ```TS
   {
     serviceName: string;
     servicePassword: string;
   }
   ```
5. **User**
   ```TS
   {
     userId: string;
     username: string;
     email: string;
     createdAt: Date;
     updatedAt: Date;
     event: string;
   }
   ```
6. **UserChatRoom**
   ```TS
   {
     userChatRoomId: string;
     userId: string;
     chatRoomId: string;
     chatRoom: string;
     joinedAt: Date;
     event: string;
   }
   ```
