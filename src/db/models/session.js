import { model, Schema } from 'mongoose';
import { UsersCollection } from './user.js';

const Session = new Schema(
  {
    userId: {
      type: Schema.ObjectId,
      required: true,
      ref: UsersCollection,
      unique: true,
    },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const SessionCollection = model('session', Session);
