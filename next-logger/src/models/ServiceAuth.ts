import mongoose, { Schema, Document } from "mongoose";

interface IServiceAuth extends Document {
  serviceName: string;
  servicePassword: string;
}

const ServiceAuthSchema = new Schema<IServiceAuth>({
  serviceName: { type: String, required: true },
  servicePassword: { type: String, required: true },
});

const ServiceAuthModel =
  mongoose.models.ServiceAuth ||
  mongoose.model<IServiceAuth>("ServiceAuth", ServiceAuthSchema);

export default ServiceAuthModel;
