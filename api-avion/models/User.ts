import { Schema, model, HydratedDocument } from 'mongoose';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import { UserFields, UserMethods, UserModel } from '../types';

const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema<UserFields, UserModel, UserMethods>({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: async function (
        this: HydratedDocument<UserFields>,
        email: string,
      ): Promise<boolean> {
        if (!this.isModified('email')) return true;

        const user: HydratedDocument<UserFields> | null = await User.findOne({
          email,
        });

        return !user;
      },
      message: 'This user is already registered!',
    },
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'user',
  },
  displayName: {
    type: String,
    required: true,
  },

  googleID: String,
});

UserSchema.methods.checkPassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function () {
  this.token = randomUUID();
};
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.set('toJSON', {
  transform: (_doc, ret) => {
    delete ret.password;
    return ret;
  },
});

const User = model<UserFields, UserModel>('User', UserSchema);
export default User;
