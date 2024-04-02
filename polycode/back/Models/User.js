import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
        Name: {
            type: String,
            required: true,
        },
        Surname: {
            type: String,
            required: true,
        },
        Middlename: {
            type: String,
        },
        age: {
            type: Number,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatarUrl: {
            type: String,
        },
    }, {
        timestamps: true,
    },

);

export default mongoose.model('User', UserSchema);