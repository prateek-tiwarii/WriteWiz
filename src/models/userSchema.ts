import mongoose, { models } from 'mongoose';

const UserSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
      },
      email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
      },
      password: {
        type: String,
        required: true,
      },
})

const User = mongoose.models?.User || mongoose.model('User', UserSchema);

export default User;