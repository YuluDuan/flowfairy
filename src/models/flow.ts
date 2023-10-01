import { Schema, model, models } from 'mongoose';

const FlowSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },

  id: {
    type: String,
    required: [true, 'Id is required.'],
  },

  flowData: {
    type: Object,
    required: [true, 'Flow is required.']
  },

  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Creator is required.'],
  },

});

const Flow = models.Flow || model('Flow', FlowSchema);

export default Flow;