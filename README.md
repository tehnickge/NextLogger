# ChatLogger API

ChatLogger API — это проект, предоставляющий интерфейсы для сохранения логов сервиса "Чат", сообщениями и логированием событий. Проект разработан с использованием **Node.js** и **MongoDB** и поддерживает взаимодействие через REST API.

## 📖 Оглавление

- [Описание](#📝-описание)
- [Технологии](#-технологии)
- [Функциональность](#-функциональность)
- [Установка](#📦-установка)
- [Использование](#⚙️-использование)
- [Тестирование](#🧪-тестирование)
- [Схема данных](#📂-схема-данных)
- [Планируемые улучшения](#🛠-планируемые-улучшения)
- [Контакты](#📞-контакты)
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
