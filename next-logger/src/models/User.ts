import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  userId: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre<IUser>('save', function(next) {
  this.updatedAt = new Date(); // Обновляем updatedAt перед сохранением
  next();
});

const UserModel = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default UserModel;