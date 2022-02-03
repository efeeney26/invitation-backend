import { Schema, model } from 'mongoose';

interface Guest {
  name: string
  invitation?: string
}

const GuestSchema = new Schema<Guest>({
  name: {
    type: String,
    required: true,
  },
  invitation: String,
});

const GuestModel = model<Guest>('Guest', GuestSchema, 'guests');

export default GuestModel;
