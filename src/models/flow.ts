import { Schema, model, models } from 'mongoose';

const FlowSchema = new Schema({
  Label: {
    type: String,
    required: [true, 'Label is required.'],
  }
});

const Flow = models.Flow || model('Flow', FlowSchema);

export default Flow;