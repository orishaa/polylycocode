import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
        nickname: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            required: true,
            unique: true,
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        patronymic: {
            type: String,
        },
        avatarUrl: {
            type: String,
        },
    }, {
        timestamps: true,
    },

);

export default mongoose.model('User', UserSchema);