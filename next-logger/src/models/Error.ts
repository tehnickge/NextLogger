import mongoose, { Schema, Document } from "mongoose";

interface IError extends Document {
  module: string;
  event: string;
  info: string;
  createdAt: Date;
}

const ErrorSchema = new Schema<IError>({
  module: { type: String, required: true },
  event: { type: String, required: true },
  info: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ErrorModel =
  mongoose.models.Error || mongoose.model<IError>("Error", ErrorSchema);

export default ErrorModel;
