import mongoose, { ConnectOptions } from 'mongoose';

const uriConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/invitation';

mongoose.connect(uriConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

export default mongoose.connection;
