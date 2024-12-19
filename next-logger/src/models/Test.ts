import mongoose, { Schema, Document } from 'mongoose';

interface ITest extends Document {
  userId: string;
}

const TestSchema = new Schema<ITest>({
  userId: { type: String, required: true },
});

const TestModel = mongoose.models.Test || mongoose.model<ITest>('Test', TestSchema);

export default TestModel;
