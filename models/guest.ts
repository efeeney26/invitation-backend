import { Schema, model } from 'mongoose';

interface Guest {
  name: string
  invitation?: string
  accept: boolean
}

const GuestSchema = new Schema<Guest>({
  name: {
    type: String,
    required: true,
  },
  invitation: String,
  accept: {
    type: Boolean,
    require: true,
  }
});

const GuestModel = model<Guest>('Guest', GuestSchema, 'guests');

export default GuestModel;
