import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Импорт модуля cors
import { UserController } from './Controllers/index.js';
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import { registerValidation } from './validations.js';

mongoose.set("strictQuery", false);
mongoose
    .connect('mongodb+srv://admin:admin@cluster0.rwmsell.mongodb.net/polycode?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());
app.use(cors()); // Добавление middleware cors без дополнительных параметров

app.get('/', (req, res) => {
    res.send('Yo salam')
});

app.listen(1234, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('runninnnnn')
});

app.post('/login', UserController.login);
app.post('/register', handleValidationErrors, registerValidation, UserController.register);
app.get('/getInfo', checkAuth, UserController.getInfo);
